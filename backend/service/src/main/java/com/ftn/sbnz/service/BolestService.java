package com.ftn.sbnz.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.naming.NameNotFoundException;

import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.rule.QueryResults;
import org.kie.api.runtime.rule.QueryResultsRow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ftn.sbnz.dto.BolestDTO;
import com.ftn.sbnz.dto.PreparatiBolestiDTO;
import com.ftn.sbnz.dto.PreporukaDTO;
import com.ftn.sbnz.dto.UnosSimptomaDTO;
import com.ftn.sbnz.event.UnosSimptoma;
import com.ftn.sbnz.mapper.BolestMapper;
import com.ftn.sbnz.mapper.PreporukaMapper;
import com.ftn.sbnz.model.Biljka;
import com.ftn.sbnz.model.Bolest;
import com.ftn.sbnz.model.Preparat;
import com.ftn.sbnz.model.Preporuka;
import com.ftn.sbnz.model.Simptom;
import com.ftn.sbnz.model.enums.PotkategorijaPreparata;
import com.ftn.sbnz.respository.BiljkaRepository;
import com.ftn.sbnz.respository.BolestRepository;
import com.ftn.sbnz.respository.PreparatRepository;
import com.ftn.sbnz.respository.SimptomiRepository;

@Service
public class BolestService {

    @Autowired
    private BiljkaRepository biljkaRepository;

    @Autowired
    private SimptomiRepository simptomiRepository;

    @Autowired
	KieSessionService kieSessionService;

    @Autowired
    private KieContainer kieContainer;

    @Autowired
    private PreporukaService preporukaService;

    @Autowired
    private KieSession kieSession;

    @Autowired
    private BolestRepository bolestRepository;

    @Autowired
    private PreparatRepository preparatRepository;

    public KieContainer getKieContainer() {
        return kieContainer;
    }
    
    public PreporukaDTO determineDiseaseExistingPlant(UnosSimptomaDTO unosSimptomaDTO, String userid) throws NameNotFoundException{
        Biljka existingPlant = biljkaRepository.findById(unosSimptomaDTO.getIdBiljke()).orElseThrow(() ->  new NameNotFoundException());
        UnosSimptoma unosSimptomi = new UnosSimptoma();
        List<Simptom> simptomiBiljke = unosSimptomaDTO.getSymptomsIDs().stream()
                                                                        .map(id -> simptomiRepository.findById(id).get())
                                                                        .collect(Collectors.toList());
                                                        
        unosSimptomi.setIdBiljke(existingPlant.getId());
        unosSimptomi.setSimptomi(simptomiBiljke);
        unosSimptomi.setTip(existingPlant.getTip());
        unosSimptomi.setTrenutnaFaza(unosSimptomaDTO.getTrenutnaFaza());

        existingPlant.setTrenutnaFaza(unosSimptomaDTO.getTrenutnaFaza());
        // KieSession kieSession = kieSessionService.getKieSession(Long.valueOf(userid));
        QueryResults results = kieSession.getQueryResults("Poklapanje simptoma bolesti", existingPlant.getTip().getMoguceBolesti(), unosSimptomi.getTrenutnaFaza(), unosSimptomi.getSimptomi());    
        for(QueryResultsRow queryResult : results) {
            List<Bolest> moguceBolesti = (List<Bolest>) queryResult.get("$moguceBolesti");
            if(moguceBolesti.size() > 0) {
               Preporuka preporuka = preporukaService.createSugggestion(moguceBolesti.get(0), existingPlant, unosSimptomi);
               return PreporukaMapper.toDTO(preporuka);
            }
        }
        return null;       
    }

    public List<BolestDTO> findAll() {
        List<Bolest> bolesti = bolestRepository.findAll();
        return BolestMapper.toDtos(bolesti);
    }

    public Bolest updatePreparati(PreparatiBolestiDTO dto) {
        Optional<Bolest> optional = bolestRepository.findById(dto.getBolestId());
        if(!optional.isPresent()){
            return null;
        }
        Bolest bolest = optional.get();

        List<Preparat> preparati = preparatRepository.findAllById(dto.getPreparatiIds());

        if(dto.getPotkategorijaPreparata() == PotkategorijaPreparata.JAK){
            bolest.setJakiPreparati(preparati);
        } else if (dto.getPotkategorijaPreparata() == PotkategorijaPreparata.SLAB){
            bolest.setSlabiPreparati(preparati);
        } 
        return bolestRepository.save(bolest);
    }


}
