import { Injectable } from '@angular/core';
import { Simptom,LokacijaSimptoma } from 'src/app/model/bolest/simptomi';
import { HttpClientService } from '../custom-http/http-client.service';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SimptomService {

  constructor(private http : HttpClientService) { }

  getAllByLocation(location: LokacijaSimptoma) : Observable<Simptom[]>{
    return this.http.getT<Simptom[]>(environment.apiUrl + `simptom/by-location/${location}`);
  }
}
