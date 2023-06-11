import { Injectable } from '@angular/core';
import { HttpClientService } from '../custom-http/http-client.service';
import { UnosSimptoma } from 'src/app/model/bolest/simptomi';
import { Preporuka } from 'src/app/model/preporuka/preporuka';
import { environment } from 'src/app/enviroments/enviroment';
import { Bolest, PreparatiBolestiDTO } from 'src/app/model/bolest/bolest';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BolestService {

  constructor(private http : HttpClientService) { }

  determineDesease(unetiSimptomi: UnosSimptoma){
    return this.http.postT<Preporuka>(environment.apiUrl + 'bolest/dijagnoza', unetiSimptomi);
  }
    
  updatePreparati(dto: PreparatiBolestiDTO): Observable<Bolest> {
    return this.http.postT<Bolest>(environment.apiUrl + 'bolest/updatePreparati', dto);
  }

  getAll(): Observable<Bolest[]>{
    return this.http.getT<Bolest[]>(environment.apiUrl + "bolest/all");
  }
}
