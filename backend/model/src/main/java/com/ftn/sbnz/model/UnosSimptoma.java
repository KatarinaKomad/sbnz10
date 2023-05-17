package com.ftn.sbnz.model;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.ftn.sbnz.model.enums.FazaBiljke;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UnosSimptoma {

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Simptom> simptomi;

    @Enumerated(EnumType.STRING)
    private FazaBiljke trenutnaFaza;

    @OneToOne
    private TipBiljke tip;

    private Long idBiljke;


}
