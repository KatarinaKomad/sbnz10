package com.ftn.sbnz.service;

import java.util.Collection;

import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ftn.sbnz.event.NeizlecenaBolestPovrca;
import com.ftn.sbnz.event.NeizlecenaBolestVoca;
import com.ftn.sbnz.event.UnosSimptoma;
import com.ftn.sbnz.model.Biljka;
import com.ftn.sbnz.model.Bolest;
import com.ftn.sbnz.model.FinalnaDijagnoza;
import com.ftn.sbnz.model.Preparat;
import com.ftn.sbnz.model.Preporuka;
import com.ftn.sbnz.respository.FinalnaDijagnozaRepositiry;
import com.ftn.sbnz.respository.NeizlecenaBolestPovrcaRepository;
import com.ftn.sbnz.respository.PreporukaRepository;
import com.ftn.sbnz.respository.NeizlecenaBolestVocaRepository;

import org.kie.api.runtime.rule.FactHandle;

@Service
public class PreporukaService {

    @Autowired
    private PreparatService preparatService;

    @Autowired
    private PreporukaRepository preporukaRepository;

    @Autowired
    KieSession kieSession;

    @Autowired
    private FinalnaDijagnozaService finalnaDijagnozaService;

    @Autowired
    private FinalnaDijagnozaRepositiry finalnaDijagnozaRepositiry;

    @Autowired
    private NeizlecenaBolestVocaRepository neizlecenaBolestVocaRepository;

    @Autowired
    private NeizlecenaBolestPovrcaRepository neizlecenaBolestPovrcaRepository;
    
    
    public Preporuka createSugggestion(Bolest bolest, Biljka biljka, UnosSimptoma unosSimptomi){
        Preporuka preporuka = new Preporuka();
        preporuka.setBiljka(biljka);
        preporuka.setBolest(bolest);
        preporuka.setPoruka("");
        
        Preparat topPreparat = preparatService.getTopPrearatForDesease(bolest);
        preporuka.setNazivPreparata(topPreparat.getNaziv());
        preporuka.setPreporucenaDoza(topPreparat.getKoncentracija());
        preporuka.setOpisPreparata(topPreparat.getPotkategorija() + " " + topPreparat.getPrimarnaKategorija());
        
        FinalnaDijagnoza finalnaDijagnoza = finalnaDijagnozaService.createFinalnaDijagnoza(bolest, biljka, topPreparat);
        finalnaDijagnoza.setPreporuka(preporuka);

        kieSession.insert(preporuka);
        kieSession.insert(finalnaDijagnoza);
        kieSession.insert(unosSimptomi);
        kieSession.fireAllRules();
       
        return this.handleSessionChanges(preporuka, finalnaDijagnoza);
        
    }

    private Preporuka handleSessionChanges(Preporuka preporuka, FinalnaDijagnoza finalnaDijagnoza){
        Collection<FactHandle> handlers = kieSession.getFactHandles();
        for (FactHandle handle: handlers) {
            Object obj = kieSession.getObject(handle);
            if (obj.getClass() == Preporuka.class){
                Preporuka p = (Preporuka) obj;
                if (p.getBiljka().getId() == preporuka.getBiljka().getId()){
                    preporuka = preporukaRepository.save(p);
                }
            }
            if (obj.getClass() == FinalnaDijagnoza.class){
                FinalnaDijagnoza dijagnoza = (FinalnaDijagnoza) obj;
                if (dijagnoza.getBiljka().getId() == finalnaDijagnoza.getBiljka().getId() &&
                    dijagnoza.getBolest().getId() == finalnaDijagnoza.getBolest().getId()){
                        finalnaDijagnozaRepositiry.save(dijagnoza);
                }
            }
            else{
                finalnaDijagnozaRepositiry.save(finalnaDijagnoza);
            }
            if (obj.getClass() == NeizlecenaBolestVoca.class){
                neizlecenaBolestVocaRepository.save((NeizlecenaBolestVoca) obj);
            }
             if (obj.getClass() == NeizlecenaBolestPovrca.class){
                neizlecenaBolestPovrcaRepository.save((NeizlecenaBolestPovrca) obj);
            }
        }
        return preporuka;
    }
}
