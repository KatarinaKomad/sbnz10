import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FazaBiljke, KategorijaBiljke, VrstePovrca, VrsteVoca } from 'src/app/model/biljka/biljka';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent {

  constructor(private _formBuilder: FormBuilder){}

  plantForm = this._formBuilder.group({
    category: new FormControl('', Validators.required),
    subcatergory: new FormControl('', Validators.required),
    plantingDate: new FormControl(null, Validators.required),
    currentPhase: new FormControl('', Validators.required)
  })

  selectedDate : Date = new Date();
  vrste : string[] = this.plantForm.controls.category.value === "VOĆE" ? Object.values(VrsteVoca) : Object.values(VrstePovrca);
  Object = Object;

  maxDate: Date = new Date();

  FazaBiljke = FazaBiljke;
  KategorijaBiljke = KategorijaBiljke;

  handleChangeCategory(value : string){
    this.plantForm.controls.subcatergory.setValue('');
    this.vrste = value === "VOĆE" ? Object.values(VrsteVoca) : Object.values(VrstePovrca);
    
  }
}
