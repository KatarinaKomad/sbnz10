package com.ftn.sbnz.service;

import java.util.Collection;

import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ftn.sbnz.model.Biljka;
import com.ftn.sbnz.model.Bolest;
import com.ftn.sbnz.model.FinalnaDijagnoza;
import com.ftn.sbnz.model.Preparat;
import com.ftn.sbnz.model.Preporuka;
import org.kie.api.runtime.rule.FactHandle;

@Service
public class PreporukaService {

    @Autowired
    private PreparatService preparatService;

    @Autowired
    private KieSessionService kieSessionService;

    @Autowired
    private FinalnaDijagnozaService finalnaDijagnozaService;
    
    public Preporuka createSugggestion(Bolest bolest, Biljka biljka){
        Preporuka preporuka = new Preporuka();
        preporuka.setBiljka(biljka);
        preporuka.setBolest(bolest);
        preporuka.setPoruka("");
        
        Preparat topPreparat = preparatService.getTopPrearatForDesease(bolest);
        preporuka.setNazivPreparata(topPreparat.getNaziv());
        preporuka.setPreporucenaDoza(topPreparat.getKoncentracija());
        preporuka.setOpisPreparata(topPreparat.getPotkategorija() + " " + topPreparat.getPrimarnaKategorija());
        
        FinalnaDijagnoza finalnaDijagnoza = finalnaDijagnozaService.createFinalnaDijagnoza(bolest, biljka, topPreparat);
        KieSession kieSession = kieSessionService.getKieSession("username");
        
        kieSession.insert(preporuka);
        kieSession.insert(finalnaDijagnoza);
        kieSession.fireAllRules();
       
        Collection<FactHandle> handlers = kieSession.getFactHandles();
        for (FactHandle handle: handlers) {
            Object obj = kieSession.getObject(handle);
            if (obj.getClass() == Preporuka.class){
                System.out.println("Preporuka" + (Preporuka) obj);
                //sacuvati u bazi, vratiti kao odgovor servera
                return (Preporuka) obj;
            }
            if (obj.getClass() == FinalnaDijagnoza.class){
                System.out.println("Finalna dijagnoza" + (FinalnaDijagnoza) obj);
                //sacuvati u bazi
            }
            //hendlati slucajeve koji mogu da se dese u pravilima
        }
        return null;
    }


}
