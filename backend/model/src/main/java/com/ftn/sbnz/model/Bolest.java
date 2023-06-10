package com.ftn.sbnz.model;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

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
import lombok.EqualsAndHashCode;
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
@EqualsAndHashCode
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
    public Preparat getTopJakPreparat(Preparat preporuceni){
        if (jakiPreparati.size() > 0){
            Collections.sort(jakiPreparati, (p1, p2) -> -(p1.getAverageRate()).compareTo(p2.getAverageRate()));
            for (Preparat preparat : jakiPreparati) {
                if(preparat != preporuceni){
                    return preparat;
                }
            }
        }
        return null;
    }

    public Preparat getTopSlabPreparat(){
        if (slabiPreparati.size() > 0) {
            Collections.sort(slabiPreparati, (p1, p2) -> -(p1.getAverageRate()).compareTo(p2.getAverageRate()));
            return slabiPreparati.get(0);
        }
        return null;
    }
    public Preparat getTopSlabPreparat(Preparat preporuceni){
        if (slabiPreparati.size() > 0) {
            Collections.sort(slabiPreparati, (p1, p2) -> -(p1.getAverageRate()).compareTo(p2.getAverageRate()));
            for (Preparat preparat : slabiPreparati) {
                if(preparat != preporuceni){
                    return preparat;
                }
            }
        }
        return null;
    }

    public Preparat getNajjaciSlabPreparat(){
        List<Preparat> selektovaniPreparati = this.slabiPreparati.stream().filter(preparat -> preparat.getKoncentracija() > 0.4).collect(Collectors.toList());
        if (selektovaniPreparati.size() > 0){
            Collections.sort(selektovaniPreparati, (p1, p2) -> -(p1.getAverageRate()).compareTo(p2.getAverageRate()));
            return selektovaniPreparati.get(0);
        }
        else{
            Collections.sort(slabiPreparati, (p1, p2) -> -(p1.getAverageRate()).compareTo(p2.getAverageRate()));
            Collections.sort(slabiPreparati, (p1, p2) -> -(p1.getKoncentracija()).compareTo(p2.getKoncentracija()));
            return slabiPreparati.get(0);
        }
    }

    public Preparat getNajjaciJakPreparat(){
        List<Preparat> selektovaniPreparati = this.jakiPreparati.stream().filter(preparat -> preparat.getKoncentracija() > 0.4).collect(Collectors.toList());
        if (selektovaniPreparati.size() > 0){
            Collections.sort(selektovaniPreparati, (p1, p2) -> -(p1.getAverageRate()).compareTo(p2.getAverageRate()));
            return selektovaniPreparati.get(0);
        }
        else{
            Collections.sort(jakiPreparati, (p1, p2) -> -(p1.getAverageRate()).compareTo(p2.getAverageRate()));
            Collections.sort(jakiPreparati, (p1, p2) -> -(p1.getKoncentracija()).compareTo(p2.getKoncentracija()));
            return jakiPreparati.get(0);
        }
    }
}
