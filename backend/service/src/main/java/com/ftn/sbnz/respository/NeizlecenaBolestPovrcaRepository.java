package com.ftn.sbnz.respository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ftn.sbnz.event.NeizlecenaBolestPovrca;

@Repository
public interface NeizlecenaBolestPovrcaRepository extends JpaRepository<NeizlecenaBolestPovrca, Long>{
    
    List<NeizlecenaBolestPovrca> findByBiljkaId(Long biljkaId);
}
