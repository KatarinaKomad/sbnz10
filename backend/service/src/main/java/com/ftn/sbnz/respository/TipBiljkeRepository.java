package com.ftn.sbnz.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ftn.sbnz.model.TipBiljke;

@Repository
public interface TipBiljkeRepository extends JpaRepository<TipBiljke, Integer>{
    
    TipBiljke findByNaziv(String naziv);
}
