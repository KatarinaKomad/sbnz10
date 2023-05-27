import { Injectable } from '@angular/core';
import { HttpClientService } from '../custom-http/http-client.service';
import { Observable } from 'rxjs';
import { FinalnaDijagnoza } from 'src/app/model/dijagnoza/dijagnoza';
import { environment } from 'src/app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class DijagnozaService {

  constructor(private http: HttpClientService) { }

  findAllByUser(vlasnikId: number): Observable<FinalnaDijagnoza[]>{
    return this.http.getT<FinalnaDijagnoza[]>(environment.apiUrl + `dijagnoza/history/${vlasnikId}`);
  }
}
