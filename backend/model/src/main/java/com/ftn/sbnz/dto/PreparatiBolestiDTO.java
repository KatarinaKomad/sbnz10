package com.ftn.sbnz.dto;

import java.util.List;

import com.ftn.sbnz.model.enums.PotkategorijaPreparata;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PreparatiBolestiDTO {
    private List<Long> preparatiIds;
    private Long bolestId;
    private PotkategorijaPreparata potkategorijaPreparata;
}
