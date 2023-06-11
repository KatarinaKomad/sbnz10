import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { FinalnaDijagnoza } from 'src/app/model/dijagnoza/dijagnoza';
import { Role } from 'src/app/model/korisnik/korisnik';
import { RatePreparat } from 'src/app/model/preparat/preparat';
import { KorisnikService } from 'src/app/service/korisnik/korisnik.service';
import { PreparatService } from 'src/app/service/preparat/preparat.service';

@Component({
  selector: 'app-rate-popup',
  templateUrl: './rate-popup.component.html',
  styleUrls: ['./rate-popup.component.scss']
})
export class RatePopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: RatePreparat,
        private dialogRef: MatDialogRef<RatePopupComponent>,
        private preparatService: PreparatService,
        private korisnikService: KorisnikService,
        private toast: NgToastService){

  }

  grades : number[] = [1,2,3,4,5];
  selectedRate : number = 0;

  onSelectedRate(grade : number){
    this.selectedRate = grade;
  }

  onSubmit(){
    this.dialogRef.close();
    let preparatId = this.data.id;
    this.preparatService.ratePreparat({
      preparatId: preparatId,
      rate: this.selectedRate,
      isDoctor: this.korisnikService.getCuurentuserRole() === Role.DOKTOR
    }).subscribe({
      next: (response) => this.data.ocena = response,
      error: () => this.openError("Došlo je do greške, molimo pokušajte ponovo", "")
    })
  }

  openError(message: string, title:string){
    this.toast.error({detail: title, summary:message, position:'tr', duration:3000})
    }
}
