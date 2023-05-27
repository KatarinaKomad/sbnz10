import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { FinalnaDijagnoza } from 'src/app/model/dijagnoza/dijagnoza';
import { Role } from 'src/app/model/korisnik/korisnik';
import { DijagnozaService } from 'src/app/service/dijagnoza/dijagnoza.service';
import { KorisnikService } from 'src/app/service/korisnik/korisnik.service';

@Component({
  selector: 'app-desease-history-overview',
  templateUrl: './desease-history-overview.component.html',
  styleUrls: ['./desease-history-overview.component.scss']
})
export class DeseaseHistoryOverviewComponent implements OnInit {
  constructor(private korisnikService: KorisnikService,
              private dijagnozaService: DijagnozaService,
              private toast: NgToastService ){}

  userRoles : Role[] = [Role.PREMIUM, Role.REGULAR];
  dijagnoze: FinalnaDijagnoza [] = [];

  ngOnInit(): void {
    if (this.userRoles.includes(this.korisnikService.getCuurentuserRole())){
      this.dijagnozaService.findAllByUser(this.korisnikService.getCurretnUserid()).subscribe({
        next: response => this.dijagnoze = response,
        error: err => this.displayErrorMessage("Neuspešno dobavljanje finalnih dijagnoza", "")
      })
    }
  }

  displayErrorMessage(message: string, description: string){
    this.toast.error({detail: message,  summary: description, position:'tr', duration:3000})
  }
}
