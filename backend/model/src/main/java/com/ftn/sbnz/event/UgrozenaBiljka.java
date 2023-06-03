package com.ftn.sbnz.event;

import org.kie.api.definition.type.Expires;
import org.kie.api.definition.type.Role;

import com.ftn.sbnz.model.Biljka;
import com.ftn.sbnz.model.enums.FazaBiljke;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Role(Role.Type.EVENT)
@Expires("3m")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UgrozenaBiljka {
    private Biljka biljka;
    private FazaBiljke fazaBiljke;
    
    // public UgrozenaBiljka(Biljka biljka){
    //     this.biljka = biljka;
    // }
}
