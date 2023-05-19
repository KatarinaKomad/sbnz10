package com.ftn.sbnz.controller;

import javax.naming.NameNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ftn.sbnz.dto.PreporukaDTO;
import com.ftn.sbnz.dto.UnosSimptomaDTO;
import com.ftn.sbnz.service.BolestService;

@CrossOrigin(origins = "https://localhost:4200")
@RestController
@RequestMapping(value = "/bolest")
public class BolestController {

    @Autowired
    private BolestService bolestService;
    
    @GetMapping("/bolest")
    public ResponseEntity<?> determineDiseaseExistingPlant(@RequestBody UnosSimptomaDTO usnosSimptoma){
        try {
            PreporukaDTO prekuraka = bolestService.determineDiseaseExistingPlant(usnosSimptoma);
            return new ResponseEntity<>(prekuraka, HttpStatus.OK);
        } catch (NameNotFoundException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }    
    }
}
