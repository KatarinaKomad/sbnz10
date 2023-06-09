import { Injectable } from '@angular/core';
import { HttpClientService } from '../custom-http/http-client.service';
import { FinalnaDijagnoza } from 'src/app/model/dijagnoza/dijagnoza';
import { ReportData } from 'src/app/model/report/report';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClientService) { }

  gerReportData(request: ReportData): Observable<FinalnaDijagnoza[]> {
    return this.http.postT<FinalnaDijagnoza[]>(environment.apiUrl + "report/get-report", request);
  }
}
