package com.ftn.sbnz.service;

import java.util.Collections;
import java.util.IntSummaryStatistics;
import java.util.List;
import org.springframework.stereotype.Service;

import com.ftn.sbnz.model.Bolest;
import com.ftn.sbnz.model.Preparat;

@Service
public class PreparatService {
    
    public Preparat getTopPrearatForDesease(Bolest bolest){
        //videti da li izmeniti da se ukupno gleda i od slabih i od jakih koji je najbolji, u tom slucaju mozda dodati polje prosecna ocena
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
}
