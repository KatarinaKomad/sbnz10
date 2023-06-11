package com.ftn.sbnz.dto;

import java.util.List;

import com.ftn.sbnz.model.Preparat;
import com.ftn.sbnz.model.enums.FazaBiljke;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BolestDTO {

    private Long id;
    private String naziv;
    private List<String> simptomi; // opisi
    private List<Preparat> jakiPreparati;
    private List<Preparat> slabiPreparati;
    private FazaBiljke fazaJavljanja;

}
