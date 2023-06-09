package com.ftn.sbnz.dto;

import java.time.LocalDate;

import com.ftn.sbnz.model.enums.FazaBiljke;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class FinalnaDijagnozaDTO {
    private Long id;
    private String nazivBolesti;
    private String nazivPreparata;
    private Long idPreparat;
    private double doza;
    private double ocenaPreparata;
    private LocalDate datumPreporuke;
    private String nazivtipaBiljke;
    private Long idBiljke;
    private FazaBiljke fazaBiljke;
    private String poruka;
}
