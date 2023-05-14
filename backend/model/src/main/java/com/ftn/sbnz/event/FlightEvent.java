package com.ftn.sbnz.event;

import java.io.Serializable;

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
public class FlightEvent implements Serializable {
    
    private Long id;
    //private Date arrivalDate;
    private Boolean redirected = false;
    
}
