package com.ftn.sbnz.mapper;

import com.ftn.sbnz.dto.PreporukaDTO;
import com.ftn.sbnz.model.Preporuka;

public class PreporukaMapper {
    
    public static PreporukaDTO toDTO(Preporuka preporuka){
        return PreporukaDTO.builder()
                        .idBiljke(preporuka.getBiljka().getId())
                        .nazivBolesti(preporuka.getBolest().getNaziv())
                        .nazivPreporucenogPreparata(preporuka.getNazivPreparata())
                        .preporucenDoza(preporuka.getPreporucenaDoza())
                        .poruka(preporuka.getPoruka())
                        .opisPreparata(preporuka.getOpisPreparata())
                        .build();
    }
}
