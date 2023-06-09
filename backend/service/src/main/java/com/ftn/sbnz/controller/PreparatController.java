package com.ftn.sbnz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ftn.sbnz.dto.PreparatRateDTO;
import com.ftn.sbnz.service.PreparatService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/preparat")
public class PreparatController {

    @Autowired
    private PreparatService preparatService;
    
    @PostMapping("/rate")
    public ResponseEntity<?> addPreparatRate(@RequestBody PreparatRateDTO rateDTO){
        try{
            double rate = preparatService.ratePreparat(rateDTO);
            return new ResponseEntity<>(rate, HttpStatus.OK);
        }catch(Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }

    }
}
