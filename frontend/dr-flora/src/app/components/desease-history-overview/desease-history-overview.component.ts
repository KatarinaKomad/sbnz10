import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { FinalnaDijagnoza } from 'src/app/model/dijagnoza/dijagnoza';
import { Role } from 'src/app/model/korisnik/korisnik';
import { DijagnozaService } from 'src/app/service/dijagnoza/dijagnoza.service';
import { KorisnikService } from 'src/app/service/korisnik/korisnik.service';
import { RatePopupComponent } from '../rate-popup/rate-popup.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-desease-history-overview',
  templateUrl: './desease-history-overview.component.html',
  styleUrls: ['./desease-history-overview.component.scss']
})
export class DeseaseHistoryOverviewComponent implements OnInit {
  constructor(private korisnikService: KorisnikService,
              private dijagnozaService: DijagnozaService,
              private toast: NgToastService,
              private dialog: MatDialog){}

  userRoles : Role[] = [Role.PREMIUM, Role.REGULAR];
  dijagnoze: FinalnaDijagnoza [] = [];
  hiddenTooltip : boolean = true;
  tooltioToShow : number = -1;

  ngOnInit(): void {
    if (this.userRoles.includes(this.korisnikService.getCuurentuserRole())){
      this.dijagnozaService.findAllByUser(this.korisnikService.getCurretnUserid()).subscribe({
        next: response => {
          this.dijagnoze = response
          this.dijagnoze.map((d) => d.strDate = formatDate(d.datumPreporuke, "dd.MM.YYYY",  'en-US'))
          
          console.log(this.dijagnoze)
        },
        error: err => this.displayErrorMessage("Neuspešno dobavljanje finalnih dijagnoza", "")
      })
    }
  }

  displayErrorMessage(message: string, description: string){
    this.toast.error({detail: message,  summary: description, position:'tr', duration:3000})
  }

  openRateDialog(dijagnoza: FinalnaDijagnoza){
    this.dialog.open(RatePopupComponent, {
      data: dijagnoza
    }).afterClosed().subscribe(data => {
      if (data) {
        console.log(data) 
      }
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
}
