package com.ftn.sbnz.service;

import java.time.LocalDate;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ftn.sbnz.dto.FinalnaDijagnozaDTO;
import com.ftn.sbnz.mapper.FinalnaDijagnozaMapper;
import com.ftn.sbnz.model.Biljka;
import com.ftn.sbnz.model.Bolest;
import com.ftn.sbnz.model.FinalnaDijagnoza;
import com.ftn.sbnz.model.Korisnik;
import com.ftn.sbnz.model.Preparat;
import com.ftn.sbnz.model.enums.KategorijaKorisnika;
import com.ftn.sbnz.respository.BiljkaRepository;
import com.ftn.sbnz.respository.FinalnaDijagnozaRepositiry;
import com.ftn.sbnz.respository.KorisnikRepository;

@Service
public class FinalnaDijagnozaService {

    @Autowired
    private BiljkaRepository biljkaRepository;

    @Autowired
    private FinalnaDijagnozaRepositiry finalnaDijagnozaRepositiry;

    @Autowired
    private KorisnikRepository korisnikRepository;

    public FinalnaDijagnoza createFinalnaDijagnoza(Bolest bolest, Biljka biljka, Preparat preparat){
        FinalnaDijagnoza finalnaDijagnoza = new FinalnaDijagnoza();
        finalnaDijagnoza.setBiljka(biljka);
        finalnaDijagnoza.setBolest(bolest);
        finalnaDijagnoza.setDatumPreporuke(LocalDate.now());
        finalnaDijagnoza.setFazaBiljke(biljka.getTrenutnaFaza());
        finalnaDijagnoza.setPreporuceniPreparat(preparat);
        return finalnaDijagnoza;
    }

    public List<FinalnaDijagnozaDTO> findAllByUser(Long vlasnikId){
        List<FinalnaDijagnoza> all = new LinkedList<FinalnaDijagnoza>(); 
        List<Biljka> usersPlants = this.biljkaRepository.findByVlasnikId(vlasnikId);;
        for (Biljka biljka : usersPlants){
            all = Stream.concat(all.stream(), finalnaDijagnozaRepositiry.findByBiljkaId(biljka.getId()).stream())
            .collect(Collectors.toList());
        }
        all.sort(Comparator.comparing(FinalnaDijagnoza::getDatumPreporuke).reversed());
        return all.stream().map(FinalnaDijagnozaMapper::toDTO).collect(Collectors.toList());
    }

    public FinalnaDijagnozaDTO getLastDiagnosis(Long biljkaId) {
        FinalnaDijagnoza dijagnoza = finalnaDijagnozaRepositiry.getLatesDiagnosisByPlantId(biljkaId);
        return dijagnoza != null ? FinalnaDijagnozaMapper.toDTO(dijagnoza) : null;
    }


    public boolean isAllowedToRequestDiagnosis(Long uderId){
        Optional<Korisnik> korisnik = this.korisnikRepository.findById(uderId);
        if(korisnik.isPresent() && korisnik.get().getKategorija() == KategorijaKorisnika.REGULAR){
            Integer numberOfDiagnosisiLastMonth = this.finalnaDijagnozaRepositiry.countByUserInLastMonth(uderId, LocalDate.now().minusMonths(1));
            return numberOfDiagnosisiLastMonth <= 15;
        }
        return true;
    }

    public List<FinalnaDijagnozaDTO> findAll() {
        List<FinalnaDijagnoza> all = finalnaDijagnozaRepositiry.findAll();
    return all.stream().map(FinalnaDijagnozaMapper::toDTOWithKorisnik).collect(Collectors.toList());

    }
}
