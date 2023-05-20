package com.ftn.sbnz.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ftn.sbnz.model.Preporuka;

@Repository
public interface PreporukaRepository extends JpaRepository<Preporuka, Long> {
    
}
