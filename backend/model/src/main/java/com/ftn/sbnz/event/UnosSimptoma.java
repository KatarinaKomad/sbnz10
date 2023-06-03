package com.ftn.sbnz.event;
import java.io.Serializable;
import java.util.List;

import org.kie.api.definition.type.Expires;
import org.kie.api.definition.type.Role;

import com.ftn.sbnz.model.Simptom;
import com.ftn.sbnz.model.TipBiljke;
import com.ftn.sbnz.model.enums.FazaBiljke;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Role(Role.Type.EVENT)
@Expires("3m")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UnosSimptoma implements Serializable{

    private List<Simptom> simptomi;

    private FazaBiljke trenutnaFaza;

    private TipBiljke tip;

    private Long idBiljke;


}
