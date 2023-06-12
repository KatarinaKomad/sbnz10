package com.ftn.sbnz.model;

import java.time.LocalDate;

import org.kie.api.definition.type.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Role(Role.Type.FACT)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Trimester {
    public LocalDate startDate;
    public LocalDate endDate;
}
