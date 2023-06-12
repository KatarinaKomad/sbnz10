package com.ftn.sbnz.mapper;

import com.ftn.sbnz.dto.UserInfoDTO;
import com.ftn.sbnz.model.Doktor;
import com.ftn.sbnz.model.Korisnik;
import com.ftn.sbnz.model.enums.KategorijaKorisnika;
import com.ftn.sbnz.model.enums.Role;

public class UserMapper {
    public static UserInfoDTO toDto(Doktor doktor) {
        return UserInfoDTO.builder()
                .firstName(doktor.getIme())
                .lastName(doktor.getPrezime())
                .username(doktor.getEmail())
                .role(Role.DOKTOR)
            .build();
    }

    public static UserInfoDTO toDto(Korisnik korisnik) {
        Role role = Role.REGULAR;
        if(korisnik.getKategorija() == KategorijaKorisnika.PREMIUM){
            role = Role.PREMIUM;
        }
        return UserInfoDTO.builder()
                .firstName(korisnik.getIme())
                .lastName(korisnik.getPrezime())
                .username(korisnik.getEmail())
                .role(role)
            .build();
    }
}
