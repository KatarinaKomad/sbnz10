package com.ftn.sbnz.service;

import java.util.Collections;
import java.util.Comparator;
import java.util.IntSummaryStatistics;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ftn.sbnz.dto.NewPreparatDTO;
import com.ftn.sbnz.dto.PreparatDTO;
import com.ftn.sbnz.dto.PreparatRateDTO;
import com.ftn.sbnz.mapper.PreparatMapper;
import com.ftn.sbnz.model.Bolest;
import com.ftn.sbnz.model.Doktor;
import com.ftn.sbnz.model.Korisnik;
import com.ftn.sbnz.model.Preparat;
import com.ftn.sbnz.respository.DoktorRepository;
import com.ftn.sbnz.respository.KorisnikRepository;
import com.ftn.sbnz.respository.PreparatRepository;

@Service
public class PreparatService {

    @Autowired
    private PreparatRepository preparatRepository;

    @Autowired
    private KorisnikRepository korisnikRepository;

    @Autowired 
    private DoktorRepository doktorRepository;
    
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

    public double ratePreparat(String userId, PreparatRateDTO rateDTO){

        if(rateDTO.isDoctor()){
            Doktor doktor = doktorRepository.findById(Long.valueOf(userId)).get();
            doktor.getOcenjeneDijagnoze().add(rateDTO.getFinalnaDijagnozaId());
        } else {
            Korisnik korisnik = korisnikRepository.findById(Long.valueOf(userId)).get();
            korisnik.getOcenjeneDijagnoze().add(rateDTO.getFinalnaDijagnozaId());
        }


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

    public List<PreparatDTO> findAll() {
       List<Preparat> all = preparatRepository.findAll();
       all.sort(Comparator.comparing(Preparat::getId));
       return all.stream().map(PreparatMapper::toDTO).collect(Collectors.toList());
    }

    public Double changeKoncentracija(Long preparatId, Double koncentracija) {
        Optional<Preparat> p = preparatRepository.findById(preparatId);
        if( p.isPresent()){
            Preparat preparat = p.get();
            preparat.setKoncentracija(koncentracija);
            preparatRepository.save(preparat);
            return preparat.getKoncentracija();
        }
        return null;
    }

    public PreparatDTO addPreparat(NewPreparatDTO dto) {
        Preparat preparat = PreparatMapper.fromDTO(dto);
        Preparat saved = preparatRepository.save(preparat);
        return PreparatMapper.toDTO(saved);
    }
}
