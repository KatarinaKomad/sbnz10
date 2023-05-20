package com.ftn.sbnz.event;

import org.kie.api.definition.type.Expires;
import org.kie.api.definition.type.Role;

import com.ftn.sbnz.model.Biljka;
import com.ftn.sbnz.model.Bolest;
import com.ftn.sbnz.model.Preparat;
import com.ftn.sbnz.model.enums.FazaBiljke;

@Role(Role.Type.EVENT)
@Expires("3m")
public class NeizlecenaBolestVoca {
    Biljka biljka;
    Preparat preparat;
    Bolest bolest;
    FazaBiljke fazaJavljanja;
    
    public NeizlecenaBolestVoca(Biljka biljka,  Bolest bolest,  Preparat preparat, FazaBiljke fazaJavljanja) {
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
