package com.ftn.sbnz.mapper;

import java.util.ArrayList;

import com.ftn.sbnz.dto.NewPreparatDTO;
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

    public static Preparat fromDTO(NewPreparatDTO dto){
        return Preparat.builder()
                    .naziv(dto.getNaziv())
                    .primarnaKategorija(dto.getPrimarnaKategorija())
                    .potkategorija(dto.getPotkategorija())
                    .koncentracija(dto.getKoncentracija())
                    .ocene(new ArrayList<Integer>())
                .build();
    }
}
