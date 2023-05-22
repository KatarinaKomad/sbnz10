import { Injectable } from '@angular/core';
import { HttpClientService } from '../custom-http/http-client.service';
import { UnosSimptoma } from 'src/app/model/bolest/simptomi';
import { Preporuka } from 'src/app/model/preporuka/preporuka';
import { environment } from 'src/app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class BolestService {

  constructor(private http : HttpClientService) { }

  determineDesease(unetiSimptomi: UnosSimptoma){
    return this.http.postT<Preporuka>(environment.apiUrl + 'bolest/dijagnoza', unetiSimptomi);
  }
}
