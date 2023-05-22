import { Component, asNativeElements } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { FazaBiljke } from 'src/app/model/biljka/biljka';
import { LokacijaSimptoma, UnosSimptoma } from 'src/app/model/bolest/simptomi';
import { BolestService } from 'src/app/service/bolest/bolest.service';
import { RecomendationDisplayComponent } from '../recomendation-display/recomendation-display.component';

@Component({
  selector: 'app-desease-reporting',
  templateUrl: './desease-reporting.component.html',
  styleUrls: ['./desease-reporting.component.scss']
})
export class DeseaseReportingComponent{

  constructor(private  _formBuilder : FormBuilder,
              private toast: NgToastService,
              private bolestService: BolestService,
              private dialog: MatDialog){
  }

  Object = Object;
  FazaBiljke = FazaBiljke;
  isLoadingResponse: boolean = false;

  simptomi : {[key in LokacijaSimptoma] : number[]} = {
    [LokacijaSimptoma.LIST] : [],
    [LokacijaSimptoma.CVET] : [],
    [LokacijaSimptoma.PLOD]: [],
    [LokacijaSimptoma.GRANA]: [],
    [LokacijaSimptoma.STABLO]: []
  }

  reportingForm = this._formBuilder.group({
    plantId: new FormControl(null, Validators.required),
    fazaBiljke: new FormControl(null, Validators.required),
    symptoms: this.simptomi
  })

  onSubmit() : void{
    this.isLoadingResponse = true
    if(this.reportingForm.valid && Object.values(this.simptomi).some(obj => obj.length > 0)){
        let state : UnosSimptoma = {
          symptomsIDs: Object.values(this.simptomi).reduce(function(res, v) {
            return res.concat(v);}, []),
          idBiljke: this.reportingForm.controls.plantId.value as any as number,
          trenutnaFaza: this.reportingForm.controls.fazaBiljke.value as any as FazaBiljke        
        }
        this.bolestService.determineDesease(state).subscribe({
          next: response => {
            this.isLoadingResponse = false
            this.dialog.open(RecomendationDisplayComponent, {
              data: response,
            })
          },
          error: (err) => {
            this.isLoadingResponse = false
            this.toast.error({detail: "Došlo je do greške", summary:"Molimo pokušajte ponovo", position:'tr', duration:3000})
          }
        })
    }
    else{
      this.toast.error({detail: "Nevalidna forma", summary:"Identifikator biljke, faza i bar jedan simptom moraju biti uneti", position:'tr', duration:3000})
    }
  }
}
