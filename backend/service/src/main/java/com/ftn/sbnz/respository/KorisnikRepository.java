package com.ftn.sbnz.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ftn.sbnz.model.Korisnik;

@Repository
public interface KorisnikRepository extends JpaRepository<Korisnik, Integer> {

    Korisnik findByEmail(String email);

}
