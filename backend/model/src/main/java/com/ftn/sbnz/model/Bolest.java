package com.ftn.sbnz.model;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

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

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Simptom> simptomi;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Preparat> jakiPreparati;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Preparat> slabiPreparati;

    @Enumerated(EnumType.STRING)
    private FazaBiljke fazaJavljanja;

    public String getNaziv(){
        return naziv;
    }
}
