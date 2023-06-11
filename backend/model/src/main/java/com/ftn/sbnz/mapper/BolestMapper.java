package com.ftn.sbnz.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.ftn.sbnz.dto.BolestDTO;
import com.ftn.sbnz.model.Bolest;
import com.ftn.sbnz.model.Simptom;

public class BolestMapper {
    public static BolestDTO toDto(Bolest bolest) {
        return BolestDTO.builder()
            .id(bolest.getId())
            .naziv(bolest.getNaziv())
            .fazaJavljanja(bolest.getFazaJavljanja())
            .simptomi(bolest.getSimptomi().stream().map(Simptom::formatToString).collect(Collectors.toList()))
            .jakiPreparati(bolest.getJakiPreparati())
            .slabiPreparati(bolest.getSlabiPreparati())
            .build();
    }

    public static List<BolestDTO> toDtos(List<Bolest> bolesti) {
        return bolesti.stream().map(BolestMapper::toDto).collect(Collectors.toList());
    }
}
