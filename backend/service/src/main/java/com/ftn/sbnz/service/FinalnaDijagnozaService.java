package com.ftn.sbnz.service;

import java.time.LocalDate;

import org.springframework.stereotype.Service;

import com.ftn.sbnz.model.Biljka;
import com.ftn.sbnz.model.Bolest;
import com.ftn.sbnz.model.FinalnaDijagnoza;
import com.ftn.sbnz.model.Preparat;

@Service
public class FinalnaDijagnozaService {

    public FinalnaDijagnoza createFinalnaDijagnoza(Bolest bolest, Biljka biljka, Preparat preparat){
        FinalnaDijagnoza finalnaDijagnoza = new FinalnaDijagnoza();
        finalnaDijagnoza.setBiljka(biljka);
        finalnaDijagnoza.setBolest(bolest);
        finalnaDijagnoza.setDatumPreporuke(LocalDate.now());
        finalnaDijagnoza.setFazaBiljke(biljka.getTrenutnaFaza());
        finalnaDijagnoza.setPreporuceniPreparat(preparat);
        return finalnaDijagnoza;
    }
}
