import { Injectable } from '@angular/core';
import { Korisnik, LoginData, Role } from 'src/app/model/korisnik/korisnik';
import { HttpClientService } from '../custom-http/http-client.service';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {


  getCurrentUserId(): string {
    let userid =  sessionStorage.getItem('user');
    return userid ? userid : ''
  }

  constructor() { }

  getCuurentuserRole(): Role{
    return Role.REGULAR; //ispraviti
  }

  getCurretnUserid(): number{
    return 1; //ispraviti
  }

}
