import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  symptomsForm = this._formBuilder.group({
    list: new FormControl([]),
    cvet: new FormControl([]),
    plod: new FormControl([]),
    grana: new FormControl([]),
    stablo: new FormControl([]),
  })

  reportingForm = this._formBuilder.group({
    plantId: new FormControl('', [Validators.required]),
    symptoms: this.symptomsForm
  })
}
