import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LokacijaSimptoma, Simptom } from 'src/app/model/bolest/simptomi';
import { SimptomService } from 'src/app/service/simptom/simptom.service';

@Component({
  selector: 'app-desease-symptoms-form',
  templateUrl: './desease-symptoms-form.component.html',
  styleUrls: ['./desease-symptoms-form.component.scss']
})
export class DeseaseSymptomsFormComponent implements OnInit{

  constructor(private _formBuilder: FormBuilder, 
             private simptomService : SimptomService){}

  simptomiLista: Simptom[] = [];
  simptomiPloda : Simptom[] = [];
  simptomiCveta: Simptom[] = [];
  simptomiGrane: Simptom[] = [];
  simptomiStabla: Simptom[] = [];

   ngOnInit(): void {
    this.simptomService.getAllByLocation(LokacijaSimptoma.LIST).subscribe({
      next: (response) => this.simptomiLista = response, 
      error: (err) => console.log(err)
    })
    this.simptomService.getAllByLocation(LokacijaSimptoma.PLOD).subscribe({
      next: (response) => this.simptomiPloda = response, 
      error: (err) => console.log(err)
    })
    this.simptomService.getAllByLocation(LokacijaSimptoma.CVET).subscribe({
      next: (response) => this.simptomiCveta = response, 
      error: (err) => console.log(err)
    })
    this.simptomService.getAllByLocation(LokacijaSimptoma.GRANA).subscribe({
      next: (response) => this.simptomiGrane = response, 
      error: (err) => console.log(err)
    })
    this.simptomService.getAllByLocation(LokacijaSimptoma.STABLO).subscribe({
      next: (response) => this.simptomiStabla = response, 
      error: (err) => console.log(err)
    })
  }

  @Input() symptomsForm? : FormGroup;

}
