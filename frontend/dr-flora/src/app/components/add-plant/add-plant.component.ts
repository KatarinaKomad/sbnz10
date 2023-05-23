import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FazaBiljke } from 'src/app/model/biljka/biljka';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent {

  constructor(private _formBuilder: FormBuilder){}

  selectedDate : Date = new Date();

  FazaBiljke = FazaBiljke;
  plantForm = this._formBuilder.group({
    category: new FormControl('VOCE', Validators.required),
    subcatergory: new FormControl('jabuka', Validators.required),
    plantingDate: new FormControl(this.selectedDate, Validators.required),
    currentPhase: new FormControl('LISTANJE', Validators.required)
  })
  
}
