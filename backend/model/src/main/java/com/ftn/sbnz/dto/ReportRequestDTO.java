package com.ftn.sbnz.dto;

import java.time.LocalDate;

import com.ftn.sbnz.model.enums.ReportType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class ReportRequestDTO {
    private LocalDate startDate;
    private LocalDate endDate;
    private String nazivBolesti;
    private String tipBiljke;
    private String nazivPreparata;
    private ReportType reportType;
    private boolean isDoctor;
}
