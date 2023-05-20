package com.ftn.sbnz.model;
import java.util.Collections;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.ftn.sbnz.model.enums.FazaBiljke;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class Bolest {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String naziv;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Simptom> simptomi;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Preparat> jakiPreparati;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Preparat> slabiPreparati;

    @Enumerated(EnumType.STRING)
    private FazaBiljke fazaJavljanja;

    public String getNaziv(){
        return naziv;
    }

    public Preparat getTopJakPreparat(){
        if (jakiPreparati.size() > 0){
            Collections.sort(jakiPreparati, (p1, p2) -> -(p1.getAverageRate()).compareTo(p2.getAverageRate()));
            return jakiPreparati.get(0);
        }
        return null;
    }

    public Preparat getTopSlabPreparat(){
        if (slabiPreparati.size() > 0) {
            Collections.sort(slabiPreparati, (p1, p2) -> -(p1.getAverageRate()).compareTo(p2.getAverageRate()));
            return jakiPreparati.get(0);
        }
        return null;
    }
}
