package com.ftn.sbnz.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ftn.sbnz.model.Biljka;

@Repository
public interface BiljkaRepository extends JpaRepository<Biljka, Long> {
    
}
