import { Injectable } from '@angular/core';
import { HttpClientService } from '../custom-http/http-client.service';
import { Observable } from 'rxjs';
import { DijagnozaFitlterData, FinalnaDijagnoza } from 'src/app/model/dijagnoza/dijagnoza';
import { environment } from 'src/app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class DijagnozaService {

  constructor(private http: HttpClientService) { }

  findAllByUser(vlasnikId: number): Observable<FinalnaDijagnoza[]>{
    return this.http.getT<FinalnaDijagnoza[]>(environment.apiUrl + `dijagnoza/history/${vlasnikId}`);
  }
  findAll(): Observable<FinalnaDijagnoza[]>{
    return this.http.getT<FinalnaDijagnoza[]>(environment.apiUrl + `dijagnoza/historyAll`);
  }

  filter(dijagnoze: FinalnaDijagnoza[], filterDTO: DijagnozaFitlterData){
    return dijagnoze.filter(dijagnoza =>(filterDTO.nazivBolesti ? dijagnoza.nazivBolesti.toLowerCase().includes(filterDTO.nazivBolesti.toLowerCase()) : true)
      && (filterDTO.nazivTipaBiljke ? dijagnoza.nazivtipaBiljke.toLowerCase().includes(filterDTO.nazivTipaBiljke.toLowerCase()) : true)
      && (filterDTO.idBiljke ? (dijagnoza.idBiljke === filterDTO.idBiljke) : true));
  }

  isAllowedToRequestDiagnosis(userId: number) : Observable<boolean>{
    return this.http.getT<boolean>(environment.apiUrl + `dijagnoza/allowed/${userId}`)
  }
}
