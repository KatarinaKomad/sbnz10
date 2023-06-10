package com.ftn.sbnz.config;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.kie.api.KieServices;
import org.kie.api.builder.KieScanner;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.annotation.SessionScope;

import com.ftn.sbnz.event.NeizlecenaBolestPovrca;
import com.ftn.sbnz.event.NeizlecenaBolestVoca;
import com.ftn.sbnz.model.Biljka;
import com.ftn.sbnz.model.Doktor;
import com.ftn.sbnz.model.FinalnaDijagnoza;
import com.ftn.sbnz.model.Korisnik;
import com.ftn.sbnz.model.Simptom;
import com.ftn.sbnz.respository.BiljkaRepository;
import com.ftn.sbnz.respository.DoktorRepository;
import com.ftn.sbnz.respository.FinalnaDijagnozaRepositiry;
import com.ftn.sbnz.respository.KorisnikRepository;
import com.ftn.sbnz.respository.NeizlecenaBolestPovrcaRepository;
import com.ftn.sbnz.respository.NeizlecenaBolestVocaRepository;
import com.ftn.sbnz.respository.SimptomRepository;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Configuration
public class DroolsConfig {

    private static final Logger logger = LogManager.getLogger(DroolsConfig.class);

    @Autowired
    private KieSessionManager kieSessionManager;

    @Autowired
    private KorisnikRepository korisnikRepository;

    @Autowired
    private BiljkaRepository biljkaRepository;

    @Autowired
    private FinalnaDijagnozaRepositiry finalnaDijagnozaRepositiry;

    @Autowired
    private NeizlecenaBolestVocaRepository neizlecenaBolestVocaRepository;

    @Autowired
    private NeizlecenaBolestPovrcaRepository neizlecenaBolestPovrcaRepository;

    @Autowired
    private SimptomRepository simptomRepository;

    @Autowired
    private HttpServletRequest request;

    @Autowired
    private DoktorRepository doktorRepository;
      
    @Bean
    public KieContainer kieContainer() {
        logger.info("Creating new Kie Container.");
        KieServices ks = KieServices.Factory.get();
        KieContainer kContainer = ks
                .newKieContainer(ks.newReleaseId("com.ftn.sbnz", "kjar", "0.0.1-SNAPSHOT"));
        KieScanner kScanner = ks.newKieScanner(kContainer);
        kScanner.start(10_000);
        return kContainer;
    }

    @Bean
    @SessionScope
    public KieSession kieSession() {

        HttpSession session = request.getSession();
        Long userid = Long.valueOf((String) session.getAttribute("currentUser"));

        KieContainer kieContainer = this.kieContainer();
        KieSession kieSession = kieContainer.newKieSession("rulesSession");
        logger.info("Creating new Kie Session.");

        List<Korisnik> allUsers = korisnikRepository.findAll();
        for (Korisnik user : allUsers) {
            kieSession.insert(user);
        }

        List<Simptom> all = simptomRepository.findAll();
        for (Simptom s: all){
            kieSession.insert(s);
        }

        Korisnik currentUser = korisnikRepository.findById(userid).get();

        if (currentUser != null) {
            List<Biljka> activeUserPlants = biljkaRepository.findByVlasnikId(currentUser.getId());
            for(Biljka plant: activeUserPlants){
                kieSession.insert(plant);
                List<FinalnaDijagnoza> plantHistory = finalnaDijagnozaRepositiry.findByBiljkaId(plant.getId());
                for (FinalnaDijagnoza dijagnoza : plantHistory){
                    kieSession.insert(dijagnoza);
                }
                List<NeizlecenaBolestVoca> neizleceneBolesti = neizlecenaBolestVocaRepository.findByBiljkaId(plant.getId());
                for (NeizlecenaBolestVoca neizlecenaBolestVoca : neizleceneBolesti){
                    kieSession.insert(neizlecenaBolestVoca);
                }

                List<NeizlecenaBolestPovrca> neizleceneBolestPovrca = neizlecenaBolestPovrcaRepository.findByBiljkaId(plant.getId());
                for (NeizlecenaBolestPovrca neizlecenaBolestPovrca : neizleceneBolestPovrca){
                    kieSession.insert(neizlecenaBolestPovrca);
                }
            }
        }
        else{
            Doktor doktor = doktorRepository.findById(userid).get();
            if (doktor != null){
                //doddati sta njemu treba da bude u sesiji
            }
        }

        this.kieSessionManager.insert(kieSession);
        return kieSession;
    }

}
