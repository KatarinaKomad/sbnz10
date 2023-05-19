package com.ftn.sbnz.model;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.ftn.sbnz.model.enums.FazaBiljke;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class FinalnaDijagnoza {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne()
    private Bolest bolest;

    @OneToOne()
    private Preparat preporuceniPreparat;

    private LocalDate datumPreporuke;

    @ManyToOne(cascade = CascadeType.ALL)
    private Biljka biljka;

    @Enumerated(EnumType.STRING)
    private FazaBiljke fazaBiljke;

}
