package com.ftn.sbnz.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ftn.sbnz.model.Simptom;
import com.ftn.sbnz.model.enums.Lokacija;
import com.ftn.sbnz.respository.SimptomRepository;

@Service
public class SimptomService {

    @Autowired
    private SimptomRepository simptomRepository;
    
    public List<Simptom> getAllByLocation(Lokacija lokacija){
        return simptomRepository.findAllByLokacija(lokacija);
    }
}
