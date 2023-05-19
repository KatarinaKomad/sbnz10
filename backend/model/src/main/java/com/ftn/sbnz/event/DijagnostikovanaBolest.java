package com.ftn.sbnz.event;

import java.time.LocalDate;

import org.kie.api.definition.type.Expires;
import org.kie.api.definition.type.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Role(Role.Type.EVENT)
@Expires("3m")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DijagnostikovanaBolest {
    private Long idBiljke;
    private Long idBolesti;
    private LocalDate vremeDijagnoze;
}
