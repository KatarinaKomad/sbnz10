import { Component, asNativeElements } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { FazaBiljke } from 'src/app/model/biljka/biljka';
import { LokacijaSimptoma, UnosSimptoma } from 'src/app/model/bolest/simptomi';
import { BolestService } from 'src/app/service/bolest/bolest.service';

@Component({
  selector: 'app-desease-reporting',
  templateUrl: './desease-reporting.component.html',
  styleUrls: ['./desease-reporting.component.scss']
})
export class DeseaseReportingComponent{

  constructor(private  _formBuilder : FormBuilder,
              private toast: NgToastService,
              private bolestService: BolestService){
  }

  Object = Object;
  FazaBiljke = FazaBiljke;

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
    console.log(this.reportingForm);
    if(this.reportingForm.valid && Object.values(this.simptomi).some(obj => obj.length > 0)){
        let state : UnosSimptoma = {
          symptomsIDs: Object.values(this.simptomi).reduce(function(res, v) {
            return res.concat(v);}, []),
          idBiljke: this.reportingForm.controls.plantId.value as any as number,
          trenutnaFaza: this.reportingForm.controls.fazaBiljke.value as any as FazaBiljke        
        }
        this.bolestService.determineDesease(state).subscribe({
          next: response => console.log(response),
          error: (err) => console.log(err)
        })
    }
    else{
      this.toast.error({detail: "Nevalidna forma", summary:"Identifikator biljke, faza i bar jedan simptom moraju biti uneti", position:'tr', duration:3000})
    }
  }
}
