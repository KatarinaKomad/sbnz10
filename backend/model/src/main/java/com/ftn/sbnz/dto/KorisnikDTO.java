package com.ftn.sbnz.dto;

import com.ftn.sbnz.model.enums.Role;

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
public class KorisnikDTO {
    private String username;
    private Long id;
    private Role role;

    public KorisnikDTO(String username, Long id){
        this.username = username;
        this.id = id;
    }
}
