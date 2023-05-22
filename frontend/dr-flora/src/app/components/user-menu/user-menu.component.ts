import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {KeyValue} from '@angular/common';

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

  menuOptionsRouting : IMenuOption[]  = [
    {optionName: "dodavanje nove biljke", optionRoute: "add-new-plant"},
    {optionName:"unos novih simptoma", optionRoute: "report-desease"},
    {optionName:"istorija bolesti", optionRoute: "history"},
    {optionName:"pregled biljaka", optionRoute: "/lants"},
    {optionName:"izveštaji", optionRoute: "reports"}
  ]
  objectKeys = Object.keys;
  ngOnInit(): void {

  }
  
  constructor(private router: Router) {
    
  }

  private onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return -1;
  }

  changePage(url : string) : void {
    // this.router.navigate([{ outlets: { userPage: [`${url}`] }}]);
  }
}
