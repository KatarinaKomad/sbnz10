package com.ftn.sbnz.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ftn.sbnz.model.Bolest;

@Repository
public interface BolestRepository extends JpaRepository<Bolest, Long>{
    
}
