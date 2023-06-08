package com.ftn.sbnz.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ftn.sbnz.dto.KorisnikDTO;
import com.ftn.sbnz.dto.LoginDTO;
import com.ftn.sbnz.model.Doktor;
import com.ftn.sbnz.model.Korisnik;
import com.ftn.sbnz.model.enums.KategorijaKorisnika;
import com.ftn.sbnz.model.enums.Role;
import com.ftn.sbnz.respository.DoktorRepository;
import com.ftn.sbnz.respository.KorisnikRepository;

@Service
public class KorisnikService {
    
    @Autowired
    private KorisnikRepository korisnikRepository;

    @Autowired
    private DoktorRepository doktorRepository;

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

    public KorisnikDTO login(LoginDTO loginDTO) {
        Korisnik korisnik = korisnikRepository.findByEmail(loginDTO.getUsername());
        if (korisnik != null && korisnik.getPassword().equals(loginDTO.getPassword())){
            KorisnikDTO dto = new KorisnikDTO(korisnik.getEmail(), korisnik.getId());
            dto.setRole(korisnik.getKategorija() == KategorijaKorisnika.PREMIUM ? Role.PREMIUM : Role.REGULAR);
            return dto;
        }
        Doktor doktor = doktorRepository.findByEmail(loginDTO.getUsername());
        if (doktor != null && doktor.getPassword().equals(loginDTO.getPassword())){
            KorisnikDTO dto = new KorisnikDTO(doktor.getEmail(), doktor.getId(), Role.DOKTOR);
            return dto;
        }
        return null;
    }
}