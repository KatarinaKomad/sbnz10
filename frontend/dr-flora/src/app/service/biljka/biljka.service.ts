import { Injectable } from '@angular/core';
import { HttpClientService } from '../custom-http/http-client.service';
import { Biljka } from 'src/app/model/biljka/biljka';
import { environment } from 'src/app/enviroments/enviroment';
import { Observable } from 'rxjs/internal/Observable';
import { FinalnaDijagnoza } from 'src/app/model/dijagnoza/dijagnoza';
import { KorisnikService } from '../korisnik/korisnik.service';

@Injectable({
  providedIn: 'root'
})
export class BiljkaService {

  getCurrentUserPlants() {
   return this.http.getT<Biljka[]>(environment.apiUrl + `biljka/all-by-user/${this.korisnikSerice.getCurrentUserId()}`)
  }

  constructor(private http: HttpClientService, private korisnikSerice: KorisnikService) { }

  saveNewPlant(biljka: Biljka) : Observable<Biljka> {
    return this.http.postT<Biljka>(environment.apiUrl + "biljka/save-new", biljka);
  }

  getLastDiagnosis(biljkaId: number) : Observable<FinalnaDijagnoza>{
    return this.http.getT<FinalnaDijagnoza>(environment.apiUrl + `dijagnoza/last-desease/${biljkaId}`);
  }
}
