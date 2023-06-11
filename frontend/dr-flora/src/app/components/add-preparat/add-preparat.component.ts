import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { KategorijaPreparata, NewPreparat, PotkategorijaPreparata } from 'src/app/model/preparat/preparat';
import { PreparatService } from 'src/app/service/preparat/preparat.service';

@Component({
  selector: 'app-add-preparat',
  templateUrl: './add-preparat.component.html',
  styleUrls: ['./add-preparat.component.scss']
})
export class AddPreparatComponent {

  KategorijaPreparata = KategorijaPreparata;
  PotkategorijaPreparata = PotkategorijaPreparata;
  Object = Object;

  constructor(
    private dialogRef: MatDialogRef<AddPreparatComponent>,
    private preparatService: PreparatService,
    private formBuilder: FormBuilder,
    private toast: NgToastService
  ){}

  newPreparatForm = this.formBuilder.group({
    naziv: new FormControl(""),
    primarnaKategorija: new FormControl(null),
    potkategorija: new FormControl(null),
    koncentracija: new FormControl(0.0),
    // ocena: new FormControl(0),
  })

  save(){
    const newPreparat = this.createPreparat();
    this.preparatService.addPreparat(newPreparat).subscribe({
      next: (response) => {
        if(response === null) {
          this.openError("Došlo je do greške, molimo pokušajte ponovo", "");
        }
        else{
            response.ocena = 0.0
            this.dialogRef.close(response);
            this.displaySuccessMessage(`Uspešno čuvanje preparata`,  `${response.naziv}`)
          }
      },
      error: () => this.openError("Došlo je do greške, molimo pokušajte ponovo", "")
    })
  }
  createPreparat(): NewPreparat {
    return {
      naziv: this.newPreparatForm.value.naziv as String,
      primarnaKategorija: this.newPreparatForm.value.primarnaKategorija as unknown as KategorijaPreparata,
      potkategorija: this.newPreparatForm.value.potkategorija as unknown as PotkategorijaPreparata,
      koncentracija: this.newPreparatForm.value.koncentracija as number,
      // ocena: this.newPreparatForm.value.ocena as number
    }
  }

  close() {
    this.dialogRef.close();
  }

  openError(message: string, title:string){
    this.toast.error({detail: title, summary:message, position:'tr', duration:3000})
  }
  displaySuccessMessage(message: string, description: string){
    this.toast.success({detail: message, summary: description, position:'tr', duration:3000})
  }
}
