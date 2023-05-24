package com.ftn.sbnz.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ftn.sbnz.dto.BiljkaDTO;

@RestController
@RequestMapping(value ="/biljka")
@CrossOrigin(origins = "http://localhoct:4200")
public class BiljkaController {
    
    @PostMapping("/")
    public void saveNewPlant(@RequestBody BiljkaDTO biljkaDTO){

    }
}
