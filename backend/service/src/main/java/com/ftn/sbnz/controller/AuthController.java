package com.ftn.sbnz.controller;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ftn.sbnz.dto.KorisnikDTO;
import com.ftn.sbnz.dto.LoginDTO;
import com.ftn.sbnz.service.KorisnikService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/auth")
public class AuthController {

    @Autowired
    private KorisnikService korisnikService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO loginDTO){
        try{
            KorisnikDTO dto = this.korisnikService.login(loginDTO);
            return new ResponseEntity<>(dto, HttpStatus.OK);
        }
        catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }

}
