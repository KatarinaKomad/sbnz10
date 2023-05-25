package com.ftn.sbnz.dto;

import java.time.LocalDate;

import com.ftn.sbnz.model.enums.FazaBiljke;
import com.ftn.sbnz.model.enums.KategorijaBiljke;

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
public class BiljkaDTO {
    private FazaBiljke trenutnaFaza;
    private KategorijaBiljke kategorija;
    private String nazivTipa;
    private LocalDate datumSadnje;
    private String vlasnikEmail;
    private Long id;

}
