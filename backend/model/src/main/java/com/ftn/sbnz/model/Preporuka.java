package com.ftn.sbnz.model;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

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
public class Preporuka {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    // @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    // private Preparat preparat;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private Bolest Bolest;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private Biljka biljka;

    private String poruka;

    private String nazivPreparata;

    private Double preporucenaDoza;

    private String opisPreparata;

    public Double getPreporucenaDoza(){
        return preporucenaDoza;
    }

    public void setPreporucenaDoza(Double doza){
        this.preporucenaDoza = doza;
    }

    public void setNazivPreparata(String naziv){
        this.nazivPreparata = naziv;
    }

    public void setPoruka(String poruka){
        this.poruka = poruka;
    }

    public void setOpisPreparata(String opis){
        this.opisPreparata = opis;
    }
    
    
}
