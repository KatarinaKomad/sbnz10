package com.ftn.sbnz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ftn.sbnz.dto.ReportRequestDTO;
import com.ftn.sbnz.service.ReportService;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.ftn.sbnz.dto.FinalnaDijagnozaDTO;

@RestController
@RequestMapping(value ="/report")
@CrossOrigin(origins = "http://localhost:4200")
public class ReportsController {

    @Autowired
    private ReportService reportService;
    
    @Autowired
    private HttpServletRequest request;
    
    
    @PostMapping("/get-report")
    public ResponseEntity<?> getReport(@RequestHeader("currentUser") String userid, @RequestBody ReportRequestDTO requestDTO){
        HttpSession session = request.getSession();
        session.setAttribute("currentUser", userid);
        try{
            List<FinalnaDijagnozaDTO> list = this.reportService.getReport(requestDTO);
            return new ResponseEntity<>(list, HttpStatus.OK);
        }
        catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }

}
