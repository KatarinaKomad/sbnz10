import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Biljka, FazaBiljke, KategorijaBiljke, VrstePovrca, VrsteVoca } from 'src/app/model/biljka/biljka';
import { LokacijaSimptoma, UnosSimptoma } from 'src/app/model/bolest/simptomi';
import { BiljkaService } from 'src/app/service/biljka/biljka.service';
import { RecomendationDisplayComponent } from '../recomendation-display/recomendation-display.component';
import { BolestService } from 'src/app/service/bolest/bolest.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { KorisnikService } from 'src/app/service/korisnik/korisnik.service';
import { DijagnozaService } from 'src/app/service/dijagnoza/dijagnoza.service';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent {

  constructor(private _formBuilder: FormBuilder, 
              private biljkaServie: BiljkaService,  
              private toast: NgToastService,
              private bolestService : BolestService,
              private dialog: MatDialog,
              private router: Router,
              private korisnikService: KorisnikService,
              private dijagnozaService: DijagnozaService){}

  plantForm = this._formBuilder.group({
    category: new FormControl('', Validators.required),
    subcatergory: new FormControl('', Validators.required),
    plantingDate: new FormControl(null, Validators.required),
    currentPhase: new FormControl('', Validators.required)
  })

  selectedDate : Date = new Date();
  vrste : string[] = this.plantForm.controls.category.value === "VOCE" ? Object.values(VrsteVoca) : Object.values(VrstePovrca);
  Object = Object;

  maxDate: Date = new Date();

  FazaBiljke = FazaBiljke;
  KategorijaBiljke = KategorijaBiljke;

  savedPlant?: Biljka;

  isLoadingDeseaseResponse: boolean = false;

  simptomi : {[key in LokacijaSimptoma] : number[]} = {
    [LokacijaSimptoma.LIST] : [],
    [LokacijaSimptoma.CVET] : [],
    [LokacijaSimptoma.PLOD]: [],
    [LokacijaSimptoma.GRANA]: [],
    [LokacijaSimptoma.STABLO]: []
  }

  ngOnInit(): void {
    this.dijagnozaService.isAllowedToRequestDiagnosis(this.korisnikService.getCurrentUserId() as unknown as number).subscribe({
      next: (response) => {
        this.isAllowedTorequestDiagnosis = response;
        this.isAllowedChecked = true;
      },
      error: (err) => {
        console.log(err);
        this.isAllowedChecked = true;}
    })
      
  }

  isAllowedTorequestDiagnosis : boolean = false;
  enterSymptoms: boolean = false;
  isAllowedChecked: boolean = false;

  handleChangeCategory(value : string){
    this.plantForm.controls.subcatergory.setValue('');
    this.vrste = value === "VOCE" ? Object.values(VrsteVoca) : Object.values(VrstePovrca);
  }

  handleSave() : void {
    if (this.plantForm.valid){
      try{
        this.biljkaServie.saveNewPlant(this.createPlant()).subscribe({
           next: (respose) => { 
            this.savedPlant = respose;
            this.plantForm.reset();
            this.displaySuccessMessage("Uspešno čuvanje biljke",  `Identifikator biljke je: ${respose.id}`)
          },
           error: (err) => this.displayErrorMessage("Došlo je do greške", "Molimo pokušajte ponovo")
        })
      }
      catch(e){
        this.displayErrorMessage("Neispravno popunjena forma", "Molimo Vas pokušajte ponovo birajući ponuđene opcije")
      }
    }
  }


  handleContinue(){
    if (this.plantForm.valid){
      try{
        this.biljkaServie.saveNewPlant(this.createPlant()).subscribe({
           next: (respose) => { 
            this.savedPlant = respose;
            this.enterSymptoms = true;
            this.displaySuccessMessage("Uspešno čuvanje biljke",  `Identifikator biljke je: ${respose.id}`)
          },
           error: (err) => this.displayErrorMessage("Došlo je do greške", "Molimo pokušajte ponovo")
        })
      }
      catch(e){
        this.displayErrorMessage("Neispravno popunjena forma", "Molimo Vas pokušajte ponovo birajući ponuđene opcije")

      }
    }
  }

  createPlant() : Biljka {
    let newPlant : Biljka = {
      kategorija: this.plantForm.controls.category.value as string,
      nazivTipa: this.plantForm.controls.subcatergory.value?.toLowerCase() as any as string,
      datumSadnje: this.plantForm.controls.plantingDate.value as any as Date,
      trenutnaFaza: this.plantForm.controls.currentPhase.value as string,
      vlasnikId:  this.korisnikService.getCurrentUserId() as unknown as number
    } 
    return newPlant
  }

  handleSaveSymptoms(){
    this.isLoadingDeseaseResponse = true
    if(this.plantForm.valid  && this.savedPlant && Object.values(this.simptomi).some(obj => obj.length > 0)){
        let state : UnosSimptoma = {
          symptomsIDs: Object.values(this.simptomi).reduce(function(res, v) {
            return res.concat(v);}, []),
          idBiljke: this.savedPlant.id as any as number, 
          trenutnaFaza: this.plantForm.controls.currentPhase.value as any as FazaBiljke        
        }
          this.bolestService.determineDesease(state).subscribe({
            next: response => {
              this.isLoadingDeseaseResponse = false
              this.dialog.open(RecomendationDisplayComponent, {
                data: response,
              }).afterClosed().subscribe(() => this.router.navigateByUrl('/user')) //bice nesto sto predstavalja home page za usera
            },
            error: (err) => {
              this.isLoadingDeseaseResponse = false
              this.toast.error({detail: "Došlo je do greške", summary:"Molimo pokušajte ponovo", position:'tr', duration:3000})
            }
          })
    }
    else{
      this.toast.error({detail: "Nevalidna forma", summary:"Identifikator biljke, faza i bar jedan simptom moraju biti uneti", position:'tr', duration:3000})
    }
  }

  displaySuccessMessage(message: string, description: string){
    this.toast.success({detail: message, summary: description, position:'tr', duration:3000})
  }

  displayErrorMessage(message: string, description: string){
    this.toast.error({detail: message,  summary: description, position:'tr', duration:3000})
  }
}



