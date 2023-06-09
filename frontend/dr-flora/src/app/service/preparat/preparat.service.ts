import { Injectable } from '@angular/core';
import { HttpClientService } from '../custom-http/http-client.service';
import { RateData } from 'src/app/model/preparat/preparat';
import { environment } from 'src/app/enviroments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreparatService {

  constructor(private http: HttpClientService) { }

  ratePreparat(rate: RateData) : Observable<number>{
    return this.http.postT<number>(environment.apiUrl + "preparat/rate", rate);
  }
}
