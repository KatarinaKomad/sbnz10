import { Injectable } from '@angular/core';
import { HttpClientService } from '../custom-http/http-client.service';
import { NewPreparat, Preparat, RateData } from 'src/app/model/preparat/preparat';
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
  changeConcentration(preparatId: number, koncentracija: number):  Observable<number|null> {
    return this.http.postT<number>(environment.apiUrl + `preparat/koncentracija/${preparatId}`, koncentracija);
  }

  addPreparat(preparat: NewPreparat):  Observable<Preparat> {
    return this.http.postT<Preparat>(environment.apiUrl + 'preparat/add', preparat);
  }

    
  getAll(): Observable<Preparat[]>{
    return this.http.getT<Preparat[]>(environment.apiUrl + "preparat/all");
  }

}
