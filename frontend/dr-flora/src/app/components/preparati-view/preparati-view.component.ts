import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { Preparat, RatePreparat } from 'src/app/model/preparat/preparat';
import { PreparatService } from 'src/app/service/preparat/preparat.service';
import { ConcentrationDialogComponent } from './concentration-dialog/concentration-dialog.component';
import { RatePopupComponent } from '../rate-popup/rate-popup.component';
import { AddPreparatComponent } from '../add-preparat/add-preparat.component';

@Component({
  selector: 'app-preparati-view',
  templateUrl: './preparati-view.component.html',
  styleUrls: ['./preparati-view.component.scss']
})
export class PreparatiViewComponent implements OnInit {

  preparati: Preparat[] = [];

  constructor(
    private preparatService: PreparatService, 
    private toast: NgToastService,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.preparatService.getAll().subscribe({
      next: (response) => {
        this.preparati = response;
        console.log(this.preparati)
      },
      error: err => this.openError("Došlo je do greške, pokušajte ponovo", "")
    })
  }

  openError(message: string, title:string){
    this.toast.error({detail: title, summary:message, position:'tr', duration:3000})
    }

  openChangeKoncentracija(preparat: Preparat){
    this.dialog.open(ConcentrationDialogComponent, {
      data: preparat
    }).afterClosed().subscribe(changedKoncentracija => {
      if (changedKoncentracija) {
        const index = this.preparati.findIndex(x => x.id == preparat.id);
        this.preparati[index].koncentracija = changedKoncentracija;
        this.preparati = [...this.preparati];
      }
    })    
  }

  // openRateDialog(preparat: Preparat){
  //   let data: RatePreparat = {id: preparat.id, ocena: preparat.ocena, naziv: preparat.naziv};
  //   this.dialog.open(RatePopupComponent, {data}).afterClosed()
  //     .subscribe(_ => {
  //       const index = this.preparati.findIndex(x => x.id == preparat.id);
  //       this.preparati[index].ocena = data.ocena;
  //       this.preparati = [...this.preparati];
  //   })
  // }

  addNewPreparat() {
    this.dialog.open(AddPreparatComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '50%',
      width: '50%',
    }).afterClosed().subscribe({ 
        next: (preparat: Preparat | null | undefined) => {
          if(preparat){
            this.preparati.push(preparat);
            this.preparati = [...this.preparati];
          }
        },
        error: _ => this.openError("Došlo je do greške, pokušajte ponovo", "")
    })
  }

}
