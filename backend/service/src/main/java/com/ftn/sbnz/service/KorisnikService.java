package com.ftn.sbnz.service;

import java.util.List;

import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ftn.sbnz.model.Korisnik;
import com.ftn.sbnz.respository.KorisnikRepository;

@Service
public class KorisnikService {

    @Autowired
	KieSession kieSession;
    
    @Autowired
    private KorisnikRepository korisnikRepository;

    public List<Korisnik> findAll() {
        return korisnikRepository.findAll();
    }    

    // public Korisnik getCurrentlyLoggedUser() {
    //     String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
    //     return this.findByEmail(userEmail);
    //             // .orElseThrow(() -> new BadRequestException(ExceptionMessageConstants.userWithEmailDoesNotExist(userEmail)));
    // }
       
    public Korisnik findByEmail(String email) {
        return korisnikRepository.findByEmail(email);
    }
}
