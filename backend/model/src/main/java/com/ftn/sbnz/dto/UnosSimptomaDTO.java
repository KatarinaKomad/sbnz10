package com.ftn.sbnz.dto;


import java.util.List;

import com.ftn.sbnz.model.enums.FazaBiljke;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UnosSimptomaDTO {
    private Long idBiljke;
    private List<Long> symptomsIDs;
    private FazaBiljke trenutnaFaza;


}
