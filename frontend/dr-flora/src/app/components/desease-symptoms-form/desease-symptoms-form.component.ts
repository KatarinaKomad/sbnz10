import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LokacijaSimptoma, Simptom } from 'src/app/model/bolest/simptomi';
import { SimptomService } from 'src/app/service/simptom/simptom.service';
import { MultiselectDropdownComponent } from '../base/multiselect-dropdown/multiselect-dropdown.component';

@Component({
  selector: 'app-desease-symptoms-form',
  templateUrl: './desease-symptoms-form.component.html',
  styleUrls: ['./desease-symptoms-form.component.scss']
})
export class DeseaseSymptomsFormComponent implements OnInit{

  constructor(private _formBuilder: FormBuilder, 
             private simptomService : SimptomService,
             private dialog: MatDialog){}

  Object = Object;
  LokacijaSimptoma = LokacijaSimptoma;
 
  sviSimptomi : {[key in LokacijaSimptoma] : Simptom[]} = {
    [LokacijaSimptoma.LIST] : [],
    [LokacijaSimptoma.CVET] : [],
    [LokacijaSimptoma.PLOD] : [],
    [LokacijaSimptoma.GRANA] : [],
    [LokacijaSimptoma.STABLO] : []
  }

   ngOnInit(): void {
    this.simptomService.getAllByLocation(LokacijaSimptoma.LIST).subscribe({
      next: (response) => {this.sviSimptomi[LokacijaSimptoma.LIST] = response; },
      error: (err) => console.log(err)
    })
    this.simptomService.getAllByLocation(LokacijaSimptoma.PLOD).subscribe({
      next: (response) => {this.sviSimptomi[LokacijaSimptoma.PLOD] = response; },
      error: (err) => console.log(err)
    })
    this.simptomService.getAllByLocation(LokacijaSimptoma.CVET).subscribe({
      next: (response) => {this.sviSimptomi[LokacijaSimptoma.CVET] = response; },
      error: (err) => console.log(err)
    })
    this.simptomService.getAllByLocation(LokacijaSimptoma.GRANA).subscribe({
      next: (response) => {this.sviSimptomi[LokacijaSimptoma.GRANA] = response; },
      error: (err) => console.log(err)
    })
    this.simptomService.getAllByLocation(LokacijaSimptoma.STABLO).subscribe({
      next: (response) => {this.sviSimptomi[LokacijaSimptoma.STABLO] = response; },
      error: (err) => console.log(err)
    })
  }

  @Input() symptomsForm? : { [key in LokacijaSimptoma] : number[]};

  openDialog(lokacija: LokacijaSimptoma){
    let params = {
      sve_opcije: this.sviSimptomi[lokacija],
      odabrane_opcije: this.symptomsForm? this.symptomsForm[lokacija] : [],
    }
    this.dialog.open(MultiselectDropdownComponent, {
      data: params,
    }).afterClosed().subscribe(data => {
        if (data) {
          console.log(params) 
          if(this.symptomsForm){
            this.symptomsForm[lokacija] = params.odabrane_opcije
          }
        }
    })
  }

}
