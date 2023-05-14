package com.ftn.sbnz.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ftn.sbnz.model.Korisnik;
import com.ftn.sbnz.service.KorisnikService;

@CrossOrigin(origins = "https://localhost:4200")
@RestController
@RequestMapping(value = "/user")
public class KorisnikController {

    @Autowired
    private KorisnikService korisnikService;
    

    @GetMapping()
    public ResponseEntity<List<Korisnik>> getAllUsers() {
        List<Korisnik> users = korisnikService.findAll();
        // List<Korisnik> usersDTOS = new ArrayList<>();
        // for (Korisnik user : users) {
            // usersDTOS.add(userMapper.toDto(user));
        // }
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

}
