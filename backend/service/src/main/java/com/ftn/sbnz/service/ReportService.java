package com.ftn.sbnz.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ftn.sbnz.dto.FinalnaDijagnozaDTO;
import com.ftn.sbnz.dto.ReportRequestDTO;
import com.ftn.sbnz.mapper.FinalnaDijagnozaMapper;
import com.ftn.sbnz.model.FinalnaDijagnoza;
import com.ftn.sbnz.model.enums.PotkategorijaPreparata;
import com.ftn.sbnz.respository.FinalnaDijagnozaRepositiry;

@Service
public class ReportService {

    @Autowired
    private FinalnaDijagnozaRepositiry finalnaDijagnozaRepositiry;

    @Autowired
    private HttpServletRequest request;
    
    public List<FinalnaDijagnozaDTO> getReport(ReportRequestDTO requestDTO){


        switch(requestDTO.getReportType()){
            case BOLEST :  
                List<FinalnaDijagnoza> bolestList = finalnaDijagnozaRepositiry.findByBNazivBolestiAndDate(requestDTO.getNazivBolesti(), requestDTO.getStartDate(), requestDTO.getEndDate());
                return this.fileterAndConvertList(bolestList, requestDTO.isDoctor());
                    
            case TIP_BILJKE: 
                List<FinalnaDijagnoza> tipList = finalnaDijagnozaRepositiry.findByTipBiljkeAndDate(requestDTO.getTipBiljke(), requestDTO.getStartDate(), requestDTO.getEndDate());
                return this.fileterAndConvertList(tipList, requestDTO.isDoctor());
                            
            case JAKI_PREPARATI :
                List<FinalnaDijagnoza> jakiList = finalnaDijagnozaRepositiry.findByTipPreparataAndDate(PotkategorijaPreparata.JAK, requestDTO.getStartDate(), requestDTO.getEndDate());
                return this.fileterAndConvertList(jakiList, requestDTO.isDoctor());

            case SLABI_PREPARATI: 
                List<FinalnaDijagnoza> slabiList = finalnaDijagnozaRepositiry.findByTipPreparataAndDate(PotkategorijaPreparata.SLAB, requestDTO.getStartDate(), requestDTO.getEndDate());
                return this.fileterAndConvertList(slabiList, requestDTO.isDoctor());

            case PREPARAT:
                List<FinalnaDijagnoza> byPreparat = finalnaDijagnozaRepositiry.findByNazivPreparataAndDate(requestDTO.getNazivPreparata(), requestDTO.getStartDate(), requestDTO.getEndDate());
                return this.fileterAndConvertList(byPreparat, requestDTO.isDoctor());
        }

        return null;
    }

    private List<FinalnaDijagnozaDTO> fileterAndConvertList(List<FinalnaDijagnoza> list, Boolean isDoctor){
        
        HttpSession session = request.getSession();
        Long userid = Long.valueOf((String) session.getAttribute("currentUser"));
        if(list.size() > 0) {
            if(!isDoctor){
                list = list.stream()
                .filter(b -> b.getBiljka().getVlasnik().getId() == userid)
                .collect(Collectors.toList());
            }  
            return list.stream().map(FinalnaDijagnozaMapper::toDTO).collect(Collectors.toList());
        }
        return null;
    }
}
