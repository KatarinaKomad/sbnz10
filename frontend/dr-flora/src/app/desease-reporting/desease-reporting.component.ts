import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LokacijaSimptoma, Simptom } from 'src/app/model/bolest/simptomi';

@Component({
  selector: 'app-desease-reporting',
  templateUrl: './desease-reporting.component.html',
  styleUrls: ['./desease-reporting.component.scss']
})
export class DeseaseReportingComponent implements OnInit{

  constructor(private  _formBuilder : FormBuilder){
  }
  ngOnInit(): void {
    console.log("sss")
  }

  simptomiListovaIds : number[] = [];
  simptomiCvetovaIds : number[] = [];
  simptomiPlodaIds : number[] = [];
  simptomiGraneIds : number[] = [];
  simptomiStablaIds : number[] = [];

  simptomi = {
    [LokacijaSimptoma.LIST] : this.simptomiListovaIds,
    [LokacijaSimptoma.CVET] : this.simptomiCvetovaIds,
    [LokacijaSimptoma.PLOD]: this.simptomiPlodaIds,
    [LokacijaSimptoma.GRANA]: this.simptomiGraneIds,
    [LokacijaSimptoma.STABLO]: this.simptomiStablaIds
  }

  symptomsForm = this._formBuilder.group({
    list: new FormControl(this.simptomiListovaIds),
    cvet: new FormControl(this.simptomiCvetovaIds),
    plod: new FormControl(this.simptomiPlodaIds),
    grana: new FormControl(this.simptomiGraneIds),
    stablo: new FormControl(this.simptomiStablaIds),
  })

  reportingForm = this._formBuilder.group({
    plantId: new FormControl('', [Validators.required]),
    symptoms: this.symptomsForm
  })
}
