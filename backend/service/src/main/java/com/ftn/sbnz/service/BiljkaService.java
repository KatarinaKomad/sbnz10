package com.ftn.sbnz.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ftn.sbnz.dto.BiljkaDTO;
import com.ftn.sbnz.mapper.BiljkaMapper;
import com.ftn.sbnz.model.Biljka;
import com.ftn.sbnz.respository.BiljkaRepository;
import com.ftn.sbnz.respository.KorisnikRepository;
import com.ftn.sbnz.respository.TipBiljkeRepository;

@Service
public class BiljkaService {

    @Autowired
    private BiljkaRepository biljkaRepository;
    
    @Autowired
    private TipBiljkeRepository tipBiljkeRepository;

    @Autowired
    private KorisnikRepository korisnikRepository;

    
    public BiljkaDTO saveNewPlant(BiljkaDTO dto){
        Biljka  biljka = new Biljka();
        biljka.setKategorija(dto.getKategorija());
        biljka.setTip(tipBiljkeRepository.findByNaziv(dto.getNazivTipa()));
        biljka.setTrenutnaFaza(dto.getTrenutnaFaza());
        biljka.setVremeSadnje(dto.getDatumSadnje());
        biljka.setVlasnik(korisnikRepository.findById(dto.getVlasnikId()).get());
        biljkaRepository.save(biljka);
        return BiljkaMapper.toDTO(biljka);

    }


    public List<BiljkaDTO> findAllByUser(Long vlasnikId) {
        return biljkaRepository.findByVlasnikId(vlasnikId).stream().map(BiljkaMapper::toDTO).collect(Collectors.toList());
    }
}
