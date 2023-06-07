package com.ftn.sbnz.controller;

import javax.naming.NameNotFoundException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ftn.sbnz.dto.PreporukaDTO;
import com.ftn.sbnz.dto.UnosSimptomaDTO;
import com.ftn.sbnz.service.BolestService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/bolest")
public class BolestController {

    @Autowired
    private BolestService bolestService;

    @Autowired
    private HttpServletRequest request;
    
    @PostMapping("/dijagnoza")
    public ResponseEntity<?> determineDiseaseExistingPlant(@RequestHeader("currentUser") String userid, @RequestBody UnosSimptomaDTO usnosSimptoma){
        try {
            HttpSession session = request.getSession();
            session.setAttribute("currentUser", userid);
            PreporukaDTO prekuraka = bolestService.determineDiseaseExistingPlant(usnosSimptoma, userid);
            return new ResponseEntity<>(prekuraka, HttpStatus.OK);
        } catch (NameNotFoundException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }    
    }
}
