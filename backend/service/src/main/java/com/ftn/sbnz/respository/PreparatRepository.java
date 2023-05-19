package com.ftn.sbnz.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ftn.sbnz.model.Preparat;

@Repository
public interface PreparatRepository extends JpaRepository<Preparat, Integer>{ 
    
    // @Query("SELECT p FROM Preparat inner join preparat_ocena using(preparat_id) gorup by preparat_id order by avg(ocene) desc")
    // List<Preparat> getAllSortedByRating();
}
