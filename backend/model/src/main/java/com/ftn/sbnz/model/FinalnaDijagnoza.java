package com.ftn.sbnz.model;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import org.kie.api.definition.type.Role;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.ftn.sbnz.model.enums.FazaBiljke;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Role(Role.Type.EVENT)
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

    @OneToOne()
    private Biljka biljka;

    @Enumerated(EnumType.STRING)
    private FazaBiljke fazaBiljke;

    @OneToOne(cascade = CascadeType.ALL)
    private Preporuka preporuka;

    public void setPreparat(Preparat preparat){
        this.preporuceniPreparat = preparat;
    }

    public void setPreporuka(Preporuka preporuka){
        this.preporuka = preporuka;
    }

    public Preporuka getPreporuka(){
        return this.preporuka;
    }
    
}
