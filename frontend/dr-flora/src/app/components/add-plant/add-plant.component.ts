import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Biljka, FazaBiljke, KategorijaBiljke, VrstePovrca, VrsteVoca } from 'src/app/model/biljka/biljka';
import { LokacijaSimptoma } from 'src/app/model/bolest/simptomi';
import { BiljkaService } from 'src/app/service/biljka/biljka.service';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent {

  constructor(private _formBuilder: FormBuilder, private biljkaServie: BiljkaService,  private toast: NgToastService){}

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

  savedPlant?: Biljka;

  simptomi : {[key in LokacijaSimptoma] : number[]} = {
    [LokacijaSimptoma.LIST] : [],
    [LokacijaSimptoma.CVET] : [],
    [LokacijaSimptoma.PLOD]: [],
    [LokacijaSimptoma.GRANA]: [],
    [LokacijaSimptoma.STABLO]: []
  }

  enterSymptoms: boolean = false

  handleChangeCategory(value : string){
    this.plantForm.controls.subcatergory.setValue('');
    this.vrste = value === "VOĆE" ? Object.values(VrsteVoca) : Object.values(VrstePovrca);
  }

  handleSave(){
    if (this.plantForm.valid){
      let newPlant : Biljka = {
        kategorija: KategorijaBiljke[this.plantForm.controls.category.value as any],
        nazivTipa: this.plantForm.controls.subcatergory.value as any as string,
        datumSadnje: this.plantForm.controls.plantingDate.value as any as Date,
        trenutnaFaza: FazaBiljke[this.plantForm.controls.currentPhase.value as any],
        vlasnikEmail:  "natasha.lakovic@gmail.com"//current user
      } 
      this.biljkaServie.saveNewPlant(newPlant).subscribe({
         next: (respose) => { 
          this.savedPlant = respose;
          this.toast.success({detail: "Uspešno čuvanje biljke", position:'tr', duration:3000})
        },
         error: (err) => this.toast.error({detail: "Došlo je do greške", summary:"Molimo Vas pokušajte ponovo", position:'tr', duration:3000})
      })
    }
  }

  handleContinue(){
    this.enterSymptoms = true;
  }
}
