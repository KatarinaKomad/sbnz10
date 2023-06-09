package com.ftn.sbnz.service;

import java.util.Collections;
import java.util.IntSummaryStatistics;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ftn.sbnz.dto.PreparatRateDTO;
import com.ftn.sbnz.model.Bolest;
import com.ftn.sbnz.model.Preparat;
import com.ftn.sbnz.respository.PreparatRepository;

@Service
public class PreparatService {

    @Autowired
    private PreparatRepository preparatRepository;
    
    public Preparat getTopPrearatForDesease(Bolest bolest){
        if (bolest.getSlabiPreparati().size() > 0){
            Collections.sort(bolest.getSlabiPreparati(), (p1, p2) -> -getAverageRate(p1.getOcene()).compareTo(getAverageRate(p2.getOcene())));
            return bolest.getSlabiPreparati().get(0);
        } 
        else{
            Collections.sort(bolest.getJakiPreparati(), (p1, p2) -> -getAverageRate(p1.getOcene()).compareTo(getAverageRate(p2.getOcene())));
            return bolest.getJakiPreparati().get(0);
        }
    }

    private Double getAverageRate(List<Integer> ocene){
        IntSummaryStatistics sumOcene = ocene.stream().mapToInt((o) -> o).summaryStatistics();
        return sumOcene.getAverage();
    }

    public double ratePreparat(PreparatRateDTO rateDTO){
        Optional<Preparat> p = preparatRepository.findById(rateDTO.getPreparatId());
        if( p.isPresent()){
            Preparat preparat = p.get();
            int rate = rateDTO.isDoctor() ? rateDTO.getRate() * 2 : rateDTO.getRate();
            preparat.getOcene().add(rate);
            preparatRepository.save(preparat);
            return preparat.getAverageRate();
        }
    return rateDTO.getRate();
    }
}
