package com.ftn.sbnz.respository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ftn.sbnz.model.FinalnaDijagnoza;

@Repository
public interface FinalnaDijagnozaRepositiry extends JpaRepository<FinalnaDijagnoza, Long> {

    // @Query("select f from finalna_dijagnoza f where f.biljka_id = :biljkaID")
    // List<FinalnaDijagnoza> findByBiljka(@Param("biljkaID") Long biljkaID);
    List<FinalnaDijagnoza> findByBiljkaId(Long biljkaId);
}
