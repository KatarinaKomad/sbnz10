package com.ftn.sbnz.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ftn.sbnz.model.Simptom;

@Repository
public interface SimptomiRepository extends JpaRepository<Simptom, Long>{
    
}
