import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { Bolest, PreparatiBolestiDTO } from 'src/app/model/bolest/bolest';
import { Simptom } from 'src/app/model/bolest/simptomi';
import { PotkategorijaPreparata, Preparat, PreparatiMultiselect } from 'src/app/model/preparat/preparat';
import { BolestService } from 'src/app/service/bolest/bolest.service';
import { PreparatiMultiselectDialogComponent } from './preparati-multiselect-dialog/preparati-multiselect-dialog.component';
import { PreparatService } from 'src/app/service/preparat/preparat.service';
import { SymptomsViewComponent } from './symptoms-view/symptoms-view.component';

@Component({
  selector: 'app-deseases-view',
  templateUrl: './deseases-view.component.html',
  styleUrls: ['./deseases-view.component.scss']
})
export class DeseasesViewComponent {

  bolesti: Bolest[] = [];
  sviSlabiPreparati: Preparat[] = [];
  sviJakiPreparati: Preparat[] = [];
  PotkategorijaPreparata = PotkategorijaPreparata;
  
  constructor(private bolestService: BolestService,
    private preparatService: PreparatService,
    private toast: NgToastService,
    private dialog: MatDialog
  ){
    this.preparatService.getAll().subscribe({
      next: (preparati: Preparat[]) => {
          this.sviSlabiPreparati =  preparati.filter(p => p.potkategorija === PotkategorijaPreparata.SLAB);
          this.sviJakiPreparati =  preparati.filter(p => p.potkategorija === PotkategorijaPreparata.JAK);
      },
      error: err => this.displayErrorMessage("Neuspešno dobavljanje preparata", "")
    })

    this.bolestService.getAll().subscribe({
      next: (bolesti: Bolest[]) => {
          this.bolesti = bolesti;
      },
      error: _ => this.displayErrorMessage("Neuspešno dobavljanje bolesti", "")
    })
  }

  showPreparati(potkategorija: PotkategorijaPreparata, bolest: Bolest) {
    let data: PreparatiMultiselect = this.createPreparatiMultiselectData(potkategorija, bolest);
    
    this.dialog.open(PreparatiMultiselectDialogComponent,  {data} )
      .afterClosed().subscribe( (hasChanges: boolean) => {
        if(hasChanges){
          this.updatePreparati({
            bolestId: bolest.id as number, 
            potkategorijaPreparata: potkategorija, 
            preparatiIds: data.odabrane_opcije
          });
        }
      })
  } 

  updatePreparati(data: PreparatiBolestiDTO) {
    this.bolestService.updatePreparati(data).subscribe({
      next: (bolest: Bolest) => {
        const index = this.bolesti.findIndex(x => x.id == bolest.id);
        this.bolesti[index] = bolest;
        this.bolesti = [...this.bolesti];
      },
      error: _ => this.displayErrorMessage("Neuspešna izmena bolesti", "")
    })
      
  }


  createPreparatiMultiselectData(potkategorija: PotkategorijaPreparata, bolest: Bolest): PreparatiMultiselect {
    const sve_opcije: Preparat[] = potkategorija===PotkategorijaPreparata.SLAB ? this.sviSlabiPreparati : this.sviJakiPreparati;
    const odabrane_opcije: Preparat[] = potkategorija===PotkategorijaPreparata.SLAB ? bolest.slabiPreparati : bolest.jakiPreparati;

    return {
      bolestNaziv: bolest.naziv,
      sve_opcije,
      odabrane_opcije: odabrane_opcije.map(p => p.id),
      potkategorija,
    }
  }


  showSimptomi(data: Bolest) {

    this.dialog.open(SymptomsViewComponent,  {data} )
      .afterClosed().subscribe( _ => {
      })
  }

  displayErrorMessage(message: string, description: string){
    this.toast.error({detail: message,  summary: description, position:'tr', duration:3000})
  }
}
