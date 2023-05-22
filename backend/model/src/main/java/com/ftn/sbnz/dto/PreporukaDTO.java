package com.ftn.sbnz.dto;

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
public class PreporukaDTO {
    private Long idBiljke;
    private String nazivBolesti;
    private String nazivPreporucenogPreparata;
    private Double preporucenDoza;
    private String poruka;
    private String opisPreparata;
}
