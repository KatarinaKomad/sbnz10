package com.ftn.sbnz.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.ftn.sbnz.model.enums.FazaBiljke;
import com.ftn.sbnz.model.enums.KategorijaBiljke;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Biljka {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private LocalDate vremeSadnje;

    @Enumerated(EnumType.STRING)
    private FazaBiljke trenutnaFaza;

    @Enumerated(EnumType.STRING)
    private KategorijaBiljke kategorija;

    @OneToOne
    private TipBiljke tip;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<FinalnaDijagnoza> finalneDijagnoze;

    public Long getId(){
        return this.id;
    }
}
