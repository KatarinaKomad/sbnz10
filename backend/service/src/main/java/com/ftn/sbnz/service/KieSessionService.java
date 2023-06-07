package com.ftn.sbnz.service;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;

import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.rule.FactHandle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ftn.sbnz.config.DroolsConfig;
import com.ftn.sbnz.config.KieSessionManager;
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
import com.ftn.sbnz.respository.NeizlecenaBolestVocaRepository;
import com.ftn.sbnz.respository.SimptomRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@Service
public class KieSessionService {

    private HashMap<Long, KieSession> sessions = new HashMap<>();

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private BiljkaRepository biljkaRepository;

    @Autowired
    private FinalnaDijagnozaRepositiry finalnaDijagnozaRepositiry;

    @Autowired
    private NeizlecenaBolestVocaRepository neizlecenaBolestVocaRepository;

    @Autowired
    private SimptomRepository simptomRepository;

    @Autowired
    private DoktorRepository doktorRepository;

    
    @Autowired
    private KieSessionManager kieSessionManager;

    @Autowired
    private KorisnikRepository korisnikRepository;

    private static final Logger logger = LogManager.getLogger(DroolsConfig.class);

    public KieContainer getKieContainer() {
        return kieContainer;
    }

    public KieSession getKieSession(Long userId) {
        // KieSession kieSession = null;
        // kieSession = sessions.get(username);
        // if (kieSession == null) {
        //     kieSession = kieContainer.newKieSession("rulesSession");
        //     sessions.put(username, kieSession);
        // }

        // return kieSession;
        KieContainer kieContainer = this.getKieContainer();
        KieSession kieSession = sessions.get(userId);
        if (kieSession == null) {
            kieSession = kieContainer.newKieSession("rulesSession");
            logger.info("Creating new Kie Session.");

            List<Korisnik> allUsers = korisnikRepository.findAll();
            for (Korisnik user : allUsers) {
                kieSession.insert(user);
            }
            List<Simptom> all = simptomRepository.findAll();
            for (Simptom s: all){
                kieSession.insert(s);
            }

            Korisnik currentUser = korisnikRepository.findById(userId).get();

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
                }
            }
            else{
                Doktor doktor = doktorRepository.findById(userId).get();
                if (doktor != null){
                    //doddati sta njemu treba da bude u sesiji
                }
            }

            
            this.kieSessionManager.insert(kieSession); 
            }
        return kieSession;
    }

    public void clearWorkingMemory(Long userID, String type) {
        KieSession kieSession = sessions.get(userID);
        Collection<FactHandle> handlers = kieSession.getFactHandles();
        for (FactHandle handle: handlers) {
            kieSession.delete(handle);
        }
        sessions.put(userID, kieSession);
    }
    

    public void removeKieSession(Long userId) {
        try{
            sessions.get(userId).dispose();
            sessions.remove(userId);
        }catch(Exception e) {
            System.out.println("NO REGULAR SESSION");
        }
    }
}
