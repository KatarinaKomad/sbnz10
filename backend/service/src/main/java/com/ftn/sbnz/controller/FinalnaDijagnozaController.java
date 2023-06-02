package com.ftn.sbnz.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ftn.sbnz.service.FinalnaDijagnozaService;
import com.ftn.sbnz.dto.FinalnaDijagnozaDTO;
import com.ftn.sbnz.model.FinalnaDijagnoza;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/dijagnoza")
public class FinalnaDijagnozaController {

    @Autowired
    private FinalnaDijagnozaService finalnaDijagnozaService;

    @GetMapping("/history/{vlasnikId}")
    public ResponseEntity<?> getAllByUser(@PathVariable("vlasnikId") Long vlasnikId){
        try{
            List<FinalnaDijagnozaDTO> allByUser = this.finalnaDijagnozaService.findAllByUser(vlasnikId);
            return new ResponseEntity<>(allByUser, HttpStatus.OK);
        }
        catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }
    
}
