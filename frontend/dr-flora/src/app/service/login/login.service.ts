import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroments/enviroment';
import { LoginData, Korisnik } from 'src/app/model/korisnik/korisnik';
import { HttpClientService } from '../custom-http/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClientService){ }

  
  login(loginData: LoginData): Observable<Korisnik>{
    return this.http.postT<Korisnik>(environment.apiUrl + "auth/login", loginData);
  }
  
  addToSessionStorage(korisnik: Korisnik) {
    sessionStorage.setItem('user', korisnik.id.toString());
  }
}
