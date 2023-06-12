package com.ftn.sbnz.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.ftn.sbnz.model.enums.KategorijaKorisnika;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Korisnik {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private int poeni;
    @Enumerated(EnumType.STRING)
    private KategorijaKorisnika kategorija;
    @Column(nullable = false)
    private String ime;
    @Column(nullable = false)
    private String prezime;  
    @Column(nullable = false) 
    private String email;
    @Column(nullable = false)
    private String password;

    @ElementCollection
    @Builder.Default
    private List<Long> ocenjeneDijagnoze = new ArrayList<>();

    public Long getId(){
        return id;
    }

    public String getFullName() {
        return ime + " " + prezime;
    }
}
