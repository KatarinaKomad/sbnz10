package com.ftn.sbnz.model;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.ftn.sbnz.model.enums.KategorijaPreparata;
import com.ftn.sbnz.model.enums.PotkategorijaPreparata;

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
public class Preparat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable=false)
    private String naziv;

    @Enumerated(EnumType.STRING)
    private KategorijaPreparata primarnaKategorija;

    @Enumerated(EnumType.STRING)
    private PotkategorijaPreparata potkategorija;
    
    @ElementCollection
    private List<Integer> ocene;

    private double koncentracija;
}
