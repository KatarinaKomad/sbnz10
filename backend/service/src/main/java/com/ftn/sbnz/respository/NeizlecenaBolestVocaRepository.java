package com.ftn.sbnz.respository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ftn.sbnz.event.NeizlecenaBolestVoca;

@Repository
public interface NeizlecenaBolestVocaRepository extends JpaRepository<NeizlecenaBolestVoca, Long>{
    
    List<NeizlecenaBolestVoca> findByBiljkaId(Long biljkaId);
}
