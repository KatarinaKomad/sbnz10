import { Injectable } from '@angular/core';
import { HttpClientService } from '../custom-http/http-client.service';
import { Biljka } from 'src/app/model/biljka/biljka';
import { environment } from 'src/app/enviroments/enviroment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BiljkaService {

  constructor(private http: HttpClientService) { }

  saveNewPlant(biljka: Biljka) : Observable<Biljka> {
    return this.http.postT<Biljka>(environment.apiUrl + "biljka/save-new", biljka);
  }
}
