package com.ftn.sbnz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ftn.sbnz.model.enums.Lokacija;
import com.ftn.sbnz.service.SimptomService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/simptom")
public class SimptomController {

    @Autowired
    private SimptomService simptomService;
    
    @GetMapping("by-location/{location}")
    public ResponseEntity<?> getSymptomsByLocation(@PathVariable("location") Lokacija location){
        try{
            return new ResponseEntity<>(simptomService.getAllByLocation(location), HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>("Something went wrong", HttpStatus.BAD_REQUEST);
        }
    }
}
