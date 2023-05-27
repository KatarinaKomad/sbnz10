package com.ftn.sbnz.service;

import java.time.LocalDate;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ftn.sbnz.dto.FinalnaDijagnozaDTO;
import com.ftn.sbnz.mapper.FinalnaDijagnozaMapper;
import com.ftn.sbnz.model.Biljka;
import com.ftn.sbnz.model.Bolest;
import com.ftn.sbnz.model.FinalnaDijagnoza;
import com.ftn.sbnz.model.Preparat;
import com.ftn.sbnz.respository.BiljkaRepository;
import com.ftn.sbnz.respository.FinalnaDijagnozaRepositiry;

@Service
public class FinalnaDijagnozaService {

    @Autowired
    private BiljkaRepository biljkaRepository;

    @Autowired
    private FinalnaDijagnozaRepositiry finalnaDijagnozaRepositiry;

    public FinalnaDijagnoza createFinalnaDijagnoza(Bolest bolest, Biljka biljka, Preparat preparat){
        FinalnaDijagnoza finalnaDijagnoza = new FinalnaDijagnoza();
        finalnaDijagnoza.setBiljka(biljka);
        finalnaDijagnoza.setBolest(bolest);
        finalnaDijagnoza.setDatumPreporuke(LocalDate.now());
        finalnaDijagnoza.setFazaBiljke(biljka.getTrenutnaFaza());
        finalnaDijagnoza.setPreporuceniPreparat(preparat);
        return finalnaDijagnoza;
    }

    public List<FinalnaDijagnozaDTO> findAllByUser(Long vlasnikId){
        List<FinalnaDijagnoza> all = new LinkedList<FinalnaDijagnoza>(); 
        List<Biljka> usersPlants = this.biljkaRepository.findByVlasnikId(vlasnikId);
        for (Biljka biljka : usersPlants){
            all = Stream.concat(all.stream(), finalnaDijagnozaRepositiry.findByBiljkaId(biljka.getId()).stream())
            .collect(Collectors.toList());
        }

        return all.stream().map(FinalnaDijagnozaMapper::toDTO).collect(Collectors.toList());
    }
}
