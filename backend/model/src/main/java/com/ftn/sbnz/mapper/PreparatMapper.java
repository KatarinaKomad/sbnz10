package com.ftn.sbnz.mapper;

import com.ftn.sbnz.dto.PreparatDTO;
import com.ftn.sbnz.model.Preparat;

public class PreparatMapper {
    
    public static PreparatDTO toDTO(Preparat preparat){
        return PreparatDTO.builder()
                    .id(preparat.getId())
                    .naziv(preparat.getNaziv())
                    .primarnaKategorija(preparat.getPrimarnaKategorija())
                    .potkategorija(preparat.getPotkategorija())
                    .koncentracija(preparat.getKoncentracija())
                    .ocena(preparat.getAverageRate())
                .build();
    }
}
