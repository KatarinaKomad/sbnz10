package com.ftn.sbnz.event;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import org.kie.api.definition.type.Expires;
import org.kie.api.definition.type.Role;

import com.ftn.sbnz.model.Biljka;
import com.ftn.sbnz.model.Bolest;
import com.ftn.sbnz.model.Preparat;
import com.ftn.sbnz.model.enums.FazaBiljke;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Role(Role.Type.EVENT)
@Expires("4320h") //6 meseci = 6*30*24h
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class NeizlecenaBolestPovrca {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    Biljka biljka;

    @OneToOne
    Preparat preparat;

    @OneToOne
    Bolest bolest;

    @Enumerated(EnumType.STRING)
    FazaBiljke fazaJavljanja;

    private LocalDate datumDijagnoze;
    
    public NeizlecenaBolestPovrca(Biljka biljka,  Bolest bolest,  Preparat preparat, FazaBiljke fazaJavljanja) {
        this.biljka = biljka;
        this.preparat = preparat;
        this.bolest = bolest;
        this.fazaJavljanja = fazaJavljanja;
    }
    
    public Biljka getBiljka() {
        return biljka;
    }
    public void setBiljka(Biljka biljka) {
        this.biljka = biljka;
    }
    public Bolest getBolest() {
        return bolest;
    }
    public void setBolest(Bolest bolest) {
        this.bolest = bolest;
    }
    public Preparat getPreparat() {
        return preparat;
    }
    public void setPreparat(Preparat preparat) {
        this.preparat = preparat;
    }
    public FazaBiljke getFazaJavljanja() {
        return fazaJavljanja;
    }
    public void setFazaJavljanja(FazaBiljke fazaJavljanja) {
        this.fazaJavljanja = fazaJavljanja;
    }
}
