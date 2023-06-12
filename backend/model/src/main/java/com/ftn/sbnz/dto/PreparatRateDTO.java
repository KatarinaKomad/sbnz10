package com.ftn.sbnz.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PreparatRateDTO {
    private boolean isDoctor;
    private int rate;
    private Long preparatId;
    private Long finalnaDijagnozaId;
}
