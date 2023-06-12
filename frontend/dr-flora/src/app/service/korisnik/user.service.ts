import { Injectable } from '@angular/core';
import { Role, UserInfo } from 'src/app/model/korisnik/korisnik';
import { HttpClientService } from '../custom-http/http-client.service';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroments/enviroment';
import { KorisnikService } from './korisnik.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private http: HttpClientService, 
    private korisnikService: KorisnikService
    ) { }


  getLoggedUserInfo() : Observable<UserInfo>{
    const userid = this.korisnikService.getCurrentUserId();
    const role = this.korisnikService.getCuurentuserRole();
    return this.http.postT<UserInfo>(environment.apiUrl + `user/info/${userid}`, role);
  }
}
