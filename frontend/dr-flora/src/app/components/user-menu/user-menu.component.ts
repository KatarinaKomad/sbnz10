import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {KeyValue} from '@angular/common';
import { KorisnikService } from 'src/app/service/korisnik/korisnik.service';
import { Role } from 'src/app/model/korisnik/korisnik';

interface IMenuOption{
  optionName: string,
  optionRoute: string
}

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  userOptionsRouting : IMenuOption[]  = [
    {optionName: "Dodavanje nove biljke", optionRoute: "add-plant"},
    {optionName:"Unos novih simptoma", optionRoute: "report-desease"},
    {optionName:"Istorija bolesti", optionRoute: "history"},
    {optionName:"Pregled biljaka", optionRoute: "plants"},
    {optionName:"Izvestaji", optionRoute: "reports"}
  ]
  doktorOptionsRouting: IMenuOption[]  = [
    {optionName:"Istorija bolesti", optionRoute: "history"},
    {optionName:"Izvestaji", optionRoute: "reports"}
  ]

  objectKeys = Object.keys;
  role = Role.REGULAR;    

  ngOnInit(): void {
    this.role = this.korisnikService.getCuurentuserRole();
  }
  
  constructor(private korisnikService: KorisnikService) {
  }
}
