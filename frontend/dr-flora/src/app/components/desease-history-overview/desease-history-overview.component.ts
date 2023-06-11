import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { DijagnozaFitlterData, FinalnaDijagnoza } from 'src/app/model/dijagnoza/dijagnoza';
import { Role } from 'src/app/model/korisnik/korisnik';
import { DijagnozaService } from 'src/app/service/dijagnoza/dijagnoza.service';
import { KorisnikService } from 'src/app/service/korisnik/korisnik.service';
import { RatePopupComponent } from '../rate-popup/rate-popup.component';
import { formatDate } from '@angular/common';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { VrsteVoca, VrstePovrca } from 'src/app/model/biljka/biljka';

@Component({
  selector: 'app-desease-history-overview',
  templateUrl: './desease-history-overview.component.html',
  styleUrls: ['./desease-history-overview.component.scss']
})
export class DeseaseHistoryOverviewComponent implements OnInit {
  constructor(private korisnikService: KorisnikService,
              private dijagnozaService: DijagnozaService,
              private toast: NgToastService,
              private dialog: MatDialog,
              private formBuilder: FormBuilder){}

  userRoles : Role[] = [Role.PREMIUM, Role.REGULAR];
  dijagnoze: FinalnaDijagnoza [] = [];
  sveDijagnoze: FinalnaDijagnoza [] = [];
  hiddenTooltip : boolean = true;
  tooltioToShow : number = -1;

  searchForm = this.formBuilder.group({
    plantId: new FormControl(null),
    nazivBolesti: new FormControl(""),
    tipBiljke: new FormControl(""),
  })

  vrste : string[] = [...Object.values(VrsteVoca) , ...Object.values(VrstePovrca)];
  Object = Object;
  loggedRole: Role = Role.REGULAR
  ngOnInit(): void {
    this.loggedRole = this.korisnikService.getCuurentuserRole();

    if (this.userRoles.includes(this.loggedRole)){
      this.dijagnozaService.findAllByUser(this.korisnikService.getCurrentUserId() as unknown as number).subscribe({
        next: response => this.setDijagnozeData(response),
        error: err => this.displayErrorMessage("Neuspešno dobavljanje finalnih dijagnoza", "")
      })
    }
    else {
      this.dijagnozaService.findAll().subscribe({
        next: response => this.setDijagnozeData(response),
        error: err => this.displayErrorMessage("Neuspešno dobavljanje finalnih dijagnoza", "")
      })
    }
  }

  setDijagnozeData(response: any) {
    this.dijagnoze = response
    this.sveDijagnoze = response
    this.dijagnoze.map((d) => d.strDate = formatDate(d.datumPreporuke, "dd.MM.YYYY",  'en-US'))
  }

  displayErrorMessage(message: string, description: string){
    this.toast.error({detail: message,  summary: description, position:'tr', duration:3000})
  }

  openRateDialog(dijagnoza: FinalnaDijagnoza){
    let data = {id: dijagnoza.idPreparat, ocena: dijagnoza.ocenaPreparata, naziv: dijagnoza.nazivPreparata}
    this.dialog.open(RatePopupComponent, {data})
      .afterClosed().subscribe(_ => {
        const index = this.dijagnoze.findIndex(x => x.idPreparat == data.id);
        this.dijagnoze[index].ocenaPreparata = data.ocena;
        this.dijagnoze = [...this.dijagnoze];
      })
  }

  showTooltip(dijagnoza: FinalnaDijagnoza){
    this.hiddenTooltip = !this.hiddenTooltip
    this.tooltioToShow = dijagnoza.id;
  }

  isWithinTwoMonths(date: Date){
    let p = date as any as  number[];
    let dateToCompare = new Date(p[0], p[1] - 1, p[2])
    let today = new Date();
    return dateToCompare <= today && dateToCompare >= this.subtractMonths(today, 2)
  }

  subtractMonths(date: Date, months: number) : Date{
    date.setMonth(date.getMonth() - months);
    return date;
  }

  search(){
    let data : DijagnozaFitlterData = {
      idBiljke: this.searchForm.controls.plantId.value as any,
      nazivBolesti: this.searchForm.controls.nazivBolesti.value as any as string,
      nazivTipaBiljke: this.searchForm.controls.tipBiljke.value as any as string,

    }
    this.dijagnoze = this.dijagnozaService.filter(this.sveDijagnoze, data);
  }

  reset() {
    this.searchForm.reset();
    this.dijagnoze = this.sveDijagnoze;
  }
}
