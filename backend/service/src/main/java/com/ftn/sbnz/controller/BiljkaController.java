package com.ftn.sbnz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ftn.sbnz.dto.BiljkaDTO;
import com.ftn.sbnz.service.BiljkaService;

@RestController
@RequestMapping(value ="/biljka")
@CrossOrigin(origins = "http://localhost:4200")
public class BiljkaController {

    @Autowired
    private BiljkaService biljkaService;
    
    @PostMapping("/save-new")
    public ResponseEntity<?> saveNewPlant(@RequestBody BiljkaDTO biljkaDTO){
        try{
            BiljkaDTO biljka = this.biljkaService.saveNewPlant(biljkaDTO);
            return new ResponseEntity<>(biljka, HttpStatus.OK);
        }
        catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }
}