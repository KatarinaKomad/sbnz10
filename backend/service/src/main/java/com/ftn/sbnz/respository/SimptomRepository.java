package com.ftn.sbnz.respository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ftn.sbnz.model.Simptom;
import com.ftn.sbnz.model.enums.Lokacija;

@Repository
public interface SimptomRepository extends JpaRepository<Simptom, Long> {

    List<Simptom> findAllByLokacija(Lokacija lokacija);
    
}
