package com.ftn.sbnz.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ftn.sbnz.model.Doktor;

@Repository
public interface DoktorRepository extends JpaRepository<Doktor, Long> {

    Doktor findByEmail(String username);
    
}
