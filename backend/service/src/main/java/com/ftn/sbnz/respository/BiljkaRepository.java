package com.ftn.sbnz.respository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ftn.sbnz.model.Biljka;

@Repository
public interface BiljkaRepository extends JpaRepository<Biljka, Long> {
    
    // @Query("select b from biljka b where b.vlasnik_id = :vlasnikID")
    // List<Biljka> finAllByVlasnik(@Param("vlasnikID") Long vlasnikID);
    List<Biljka> findByVlasnikId(Long vlasnikId);
}
