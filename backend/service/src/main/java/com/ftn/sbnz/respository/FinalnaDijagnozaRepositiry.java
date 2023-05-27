package com.ftn.sbnz.respository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ftn.sbnz.model.FinalnaDijagnoza;

@Repository
public interface FinalnaDijagnozaRepositiry extends JpaRepository<FinalnaDijagnoza, Long> {
;
    List<FinalnaDijagnoza> findByBiljkaId(Long biljkaId);

}
