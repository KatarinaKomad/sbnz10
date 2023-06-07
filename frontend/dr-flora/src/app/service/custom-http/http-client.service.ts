import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { KorisnikService } from '../korisnik/korisnik.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient, private userService: KorisnikService) {
  }

  public createHeader() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'currentUser': this.userService.getCurrentUserId()
      // 'Authorization': "Bearer " + this.userService.getCurrentUserToken()
    });
    return headers;
  }

  get(url: string) {
    return this.http.get(url, {
      headers: this.createHeader(),
    });
  }

  post(url: string, data: any) {
    return this.http.post(url, data, {
      headers: this.createHeader()
    });
  }

  postT<Type>(url: string, data: any) {
    return this.http.post<Type>(url, data, {
      headers: this.createHeader(),
    });
  }

  getT<Type>(url: string) {
    return this.http.get<Type>(url, {
      headers: this.createHeader()
    });
  }

  getWithText(url: string) {
    return this.http.get(url, {
      headers: this.createHeader(),
      responseType: 'text'
    });
  }

  deleteWithText(url: string) {
    return this.http.delete(url, {
      headers: this.createHeader(),
      responseType: 'text'
    });
  }

  putT<Type>(url: string, data: any) {
    return this.http.put<Type>(url, data, {
      headers: this.createHeader(),
    });
  }

  deleteT<Type>(url: string) {
    return this.http.delete<Type>(url, {
      headers: this.createHeader(),
    });
  }
}
