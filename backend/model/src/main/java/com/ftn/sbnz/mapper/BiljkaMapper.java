package com.ftn.sbnz.mapper;

import com.ftn.sbnz.dto.BiljkaDTO;
import com.ftn.sbnz.model.Biljka;

public class BiljkaMapper {
    
    public static BiljkaDTO toDTO(Biljka biljka){
        return BiljkaDTO.builder()
                .vlasnikId(biljka.getVlasnik().getId())
                .nazivTipa(biljka.getTip().getNaziv())
                .datumSadnje(biljka.getVremeSadnje())
                .kategorija(biljka.getKategorija())
                .id(biljka.getId())
                .build();
    }
}
