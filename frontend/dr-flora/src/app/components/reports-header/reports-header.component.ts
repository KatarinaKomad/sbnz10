import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { VrstePovrca, VrsteVoca } from 'src/app/model/biljka/biljka';
import { Role } from 'src/app/model/korisnik/korisnik';
import { KorisnikService } from 'src/app/service/korisnik/korisnik.service';
import { Router } from '@angular/router';
import { ReportData, ReportType } from 'src/app/model/report/report';
import { ReportService } from 'src/app/service/report/report.service';
import { FinalnaDijagnoza } from 'src/app/model/dijagnoza/dijagnoza';

@Component({
  selector: 'app-reports-header',
  templateUrl: './reports-header.component.html',
  styleUrls: ['./reports-header.component.scss']
})
export class ReportsHeaderComponent implements OnInit{

    constructor(private korisnikService: KorisnikService,
                private formBuilder: FormBuilder,
                private router: Router,
                private reportService: ReportService){}
    
    displayOptions : number[] = [0,1,2,3,4]
    displayForm: boolean = false
    
    optionTitles : string[]= [
      'Statistike odabrane bolesti kod svih tipova biljaka',
      "Statistika bolesti odabrane vrste biljke",
    ]

    @Output() reportDataEmiter = new EventEmitter<FinalnaDijagnoza[]>(); 
    @Output() reportTypeEmiter = new EventEmitter<ReportType>(); 

    bindRequestType : {[key: number] : ReportType } = {
      0: ReportType.BOLEST,
      1: ReportType.TIP_BILJKE,
      2: ReportType.JAKI_PREPARATI,
      3: ReportType.SLABI_PREPARATI,
      4: ReportType.PREPARAT,
  }

    selectedReportType : ReportType = ReportType.TIP_BILJKE;

    ngOnInit(): void {
      if (this.korisnikService.getCuurentuserRole() === Role.DOKTOR){
        this.optionTitles.push( 'Statistika primene jakih preparata','Statistika primene slabih preparata', 'Statistika primene odabranog preparata',);
      }
    }

    optionClicked : {[key: number]: boolean} = {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
    }
    isTitileHidden: boolean = false;

    isClicked: boolean = false;

    handleClick(optionId: number): void {
      this.optionClicked[optionId] = true  
      this.displayOptions = [optionId]
      this.isTitileHidden = true
      this.displayForm = true;
      this.selectedReportType = this.bindRequestType[optionId];
    }

    reportForm = this.formBuilder.group({
      startDate: new FormControl(new Date(), Validators.required),
      endDate: new FormControl(new Date(), Validators.required),
      nazivBolesti: new FormControl(''),
      tipBiljke: new FormControl(''),
      nazivPreparata: new FormControl('')
    })

    vrste : string[] = [...Object.values(VrsteVoca) , ...Object.values(VrstePovrca)];
    Object = Object;
    


    search(){
      let request : ReportData =  {
        isDoctor: this.korisnikService.getCuurentuserRole() === Role.DOKTOR,
        reportType: this.selectedReportType,
        startDate: this.reportForm.controls.startDate.value as Date,
        endDate: this.reportForm.controls.endDate.value as Date,
        nazivBolesti: this.reportForm.controls.nazivBolesti.value as string,
        tipBiljke: this.reportForm.controls.tipBiljke.value?.toLocaleLowerCase() as string,
        nazivPreparata: this.reportForm.controls.nazivPreparata.value as string,
      }
      this.reportService.gerReportData(request).subscribe({
        next: (response) => {
          this.reportDataEmiter.emit(response);
          this.reportTypeEmiter.emit(this.selectedReportType)
        },
        error: () => console.log("error")
      })
    }

    reset(){
      window.location.reload();
    }
}
