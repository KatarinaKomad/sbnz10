package com.ftn.sbnz.mapper;

import com.ftn.sbnz.dto.FinalnaDijagnozaDTO;
import com.ftn.sbnz.model.FinalnaDijagnoza;

public class FinalnaDijagnozaMapper {

    public static FinalnaDijagnozaDTO toDTO(FinalnaDijagnoza dijagnoza){
        return FinalnaDijagnozaDTO.builder()
        .nazivtipaBiljke(dijagnoza.getBiljka().getTip().getNaziv())
        .idBiljke(dijagnoza.getBiljka().getId())
        .fazaBiljke(dijagnoza.getFazaBiljke())
        .nazivPreparata(dijagnoza.getPreporuka().getNazivPreparata())
        .doza(dijagnoza.getPreporuka().getPreporucenaDoza())
        .ocenaPreparata(dijagnoza.getPreporuceniPreparat().getAverageRate())
        .datumPreporuke(dijagnoza.getDatumPreporuke())
        .nazivBolesti(dijagnoza.getBolest().getNaziv())
        .poruka(dijagnoza.getPreporuka().getPoruka())
        .id(dijagnoza.getId())
        .idPreparat(dijagnoza.getPreporuceniPreparat().getId())
        .build();

    }
    public static FinalnaDijagnozaDTO toDTOWithKorisnik(FinalnaDijagnoza dijagnoza){
        return FinalnaDijagnozaDTO.builder()
        .nazivtipaBiljke(dijagnoza.getBiljka().getTip().getNaziv())
        .idBiljke(dijagnoza.getBiljka().getId())
        .fazaBiljke(dijagnoza.getFazaBiljke())
        .nazivPreparata(dijagnoza.getPreporuka().getNazivPreparata())
        .doza(dijagnoza.getPreporuka().getPreporucenaDoza())
        .ocenaPreparata(dijagnoza.getPreporuceniPreparat().getAverageRate())
        .datumPreporuke(dijagnoza.getDatumPreporuke())
        .nazivBolesti(dijagnoza.getBolest().getNaziv())
        .poruka(dijagnoza.getPreporuka().getPoruka())
        .id(dijagnoza.getId())
        .idPreparat(dijagnoza.getPreporuceniPreparat().getId())
        .vlasnik(dijagnoza.getBiljka().getVlasnik().getFullName())
        .build();

    }
    
}
