import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { VrstePovrca, VrsteVoca } from 'src/app/model/biljka/biljka';
import { Role } from 'src/app/model/korisnik/korisnik';
import { KorisnikService } from 'src/app/service/korisnik/korisnik.service';

@Component({
  selector: 'app-reports-header',
  templateUrl: './reports-header.component.html',
  styleUrls: ['./reports-header.component.scss']
})
export class ReportsHeaderComponent implements OnInit{

    constructor(private korisnikService: KorisnikService,
                private formBuilder: FormBuilder){}
    
    displayOptions : number[] = [0,1,2,3,4]
    displayForm: boolean = false
    
    optionTitles : string[]= [
      "Statistika bolesti odabrane vrste biljke",
      'Statistike odabrane bolesti kod svih tipova biljaka',
    ]

    ngOnInit(): void {
      if (this.korisnikService.getCuurentuserRole() !== Role.REGULAR){
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
}
