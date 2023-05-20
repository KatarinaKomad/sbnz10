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

import com.ftn.sbnz.model.Biljka;
import com.ftn.sbnz.model.FinalnaDijagnoza;
import com.ftn.sbnz.model.Korisnik;
import com.ftn.sbnz.respository.BiljkaRepository;
import com.ftn.sbnz.respository.FinalnaDijagnozaRepositiry;
import com.ftn.sbnz.respository.KorisnikRepository;
import com.ftn.sbnz.service.KorisnikService;

import java.util.List;

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
    private KorisnikService korisnikService;

  
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
        KieContainer kieContainer = this.kieContainer();
        KieSession kieSession = kieContainer.newKieSession("rulesSession");
        logger.info("Creating new Kie Session.");

        List<Korisnik> allUsers = korisnikRepository.findAll();
        for (Korisnik user : allUsers) {
            kieSession.insert(user);
        }

        // Korisnik currentUser = korisnikService.getCurrentlyLoggedUser();
        Korisnik currentUser = korisnikRepository.findById(1L).get();
        List<Biljka> activeUserPlants = biljkaRepository.findByVlasnikId(currentUser.getId());
        for(Biljka plant: activeUserPlants){
            kieSession.insert(plant);
            List<FinalnaDijagnoza> plantHistory = finalnaDijagnozaRepositiry.findByBiljkaId(plant.getId());
            for (FinalnaDijagnoza dijagnoza : plantHistory){
                kieSession.insert(dijagnoza);
            }
        }

        this.kieSessionManager.insert(kieSession);
        return kieSession;
    }

}
