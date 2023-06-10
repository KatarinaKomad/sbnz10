package com.ftn.sbnz.respository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ftn.sbnz.model.FinalnaDijagnoza;

@Repository
public interface FinalnaDijagnozaRepositiry extends JpaRepository<FinalnaDijagnoza, Long> {
;
    List<FinalnaDijagnoza> findByBiljkaId(Long biljkaId);

    @Query(value= "SELECT * FROM finalna_dijagnoza where biljka_id = ?1 ORDER BY datum_preporuke DESC LIMIT 1", nativeQuery = true)
    FinalnaDijagnoza getLatesDiagnosisByPlantId(Long biljkaId);

    @Query("SELECT fd FROM FinalnaDijagnoza fd JOIN fd.bolest b WHERE fd.datumPreporuke BETWEEN :startDate AND :endDate AND b.naziv = :nazivBolesti")
    List<FinalnaDijagnoza> findByBNazivBolestiAndDate(String nazivBolesti, LocalDate startDate, LocalDate endDate);
    
    @Query("SELECT fd FROM FinalnaDijagnoza fd JOIN fd.biljka b WHERE fd.datumPreporuke BETWEEN :startDate AND :endDate AND b.tip.naziv = :nazivTipa")
    List<FinalnaDijagnoza> findByTipBiljkeAndDate(String nazivTipa, LocalDate startDate, LocalDate endDate);

    @Query("SELECT COUNT(fd) FROM FinalnaDijagnoza fd JOIN fd.biljka b WHERE fd.datumPreporuke > :lastMonth AND b.vlasnik.id = :userId")
    Integer countByUserInLastMonth(Long userId, LocalDate lastMonth);


}
