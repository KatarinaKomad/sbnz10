import { Injectable } from '@angular/core';
import { Role } from 'src/app/model/korisnik/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor() { }

  getCuurentuserRole(): Role{
    return Role.REGULAR; //ispraviti
  }

  getCurretnUserid(): number{
    return 1; //ispraviti
  }
}
