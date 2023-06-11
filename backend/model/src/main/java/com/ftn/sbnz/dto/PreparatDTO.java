package com.ftn.sbnz.dto;

import com.ftn.sbnz.model.enums.KategorijaPreparata;
import com.ftn.sbnz.model.enums.PotkategorijaPreparata;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PreparatDTO {

    private Long id;
    private String naziv;
    private KategorijaPreparata primarnaKategorija;
    private PotkategorijaPreparata potkategorija;
    private double ocena;
    private double koncentracija;

}
