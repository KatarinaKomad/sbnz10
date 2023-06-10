import { Injectable } from '@angular/core';
import { HttpClientService } from '../custom-http/http-client.service';
import { FinalnaDijagnoza } from 'src/app/model/dijagnoza/dijagnoza';
import { ReportData, ReportDataType } from 'src/app/model/report/report';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroments/enviroment';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClientService) { }

  colors = ['#A4B69F', ' #ffd3b6 ', '#B2CAB6', '#e0a899' , ' #ffefd7 ', '#82B068', '#719A5E', ' #c99789', '#5A8559', '#426D54', ]


  gerReportData(request: ReportData): Observable<FinalnaDijagnoza[]> {
    return this.http.postT<FinalnaDijagnoza[]>(environment.apiUrl + "report/get-report", request);
  }

  groubByDisease(dijagnoze: FinalnaDijagnoza[]) : {[key: string] : FinalnaDijagnoza[]}  {
    let groupedData: {[key: string] : FinalnaDijagnoza[]} = {}
    dijagnoze.forEach(dijagnoza => {
      let list = groupedData[dijagnoza.nazivBolesti];
      list? list.push(dijagnoza) : groupedData[dijagnoza.nazivBolesti] = [dijagnoza]
    })
    return groupedData;
  }

  groubByPlantType(dijagnoze: FinalnaDijagnoza[]) : {[key: string] : FinalnaDijagnoza[]}  {
    let groupedData: {[key: string] : FinalnaDijagnoza[]} = {}
    dijagnoze.forEach(dijagnoza => {
      let list = groupedData[dijagnoza.nazivtipaBiljke];
      list? list.push(dijagnoza) : groupedData[dijagnoza.nazivtipaBiljke] = [dijagnoza]
    })
    return groupedData;
  }

  groubByPreparat(dijagnoze: FinalnaDijagnoza[]) : {[key: string] : FinalnaDijagnoza[]}  {
    let groupedData: {[key: string] : FinalnaDijagnoza[]} = {}
    dijagnoze.forEach(dijagnoza => {
      let list = groupedData[dijagnoza.nazivPreparata];
      list? list.push(dijagnoza) : groupedData[dijagnoza.nazivPreparata] = [dijagnoza]
    })
    return groupedData;
  }

  groupByDeseaseAndDate(dijagnoze: FinalnaDijagnoza[]) : ReportDataType {
    let groupedDataByDiseaseName = this.groubByDisease(dijagnoze);
    return this.groupByDate(groupedDataByDiseaseName);
  }

  groupByPlantTypeAndDate(dijagnoze: FinalnaDijagnoza[]) : ReportDataType {
    let groupedDataByDiseaseName = this.groubByPlantType(dijagnoze);
    return this.groupByDate(groupedDataByDiseaseName);
  }

  groupByPreparaAndDate(dijagnoze: FinalnaDijagnoza[]) : ReportDataType {
    let groupedDataByPreparat = this.groubByPreparat(dijagnoze);
    return this.groupByDate(groupedDataByPreparat);
  }

  groupByDate(groupedByParam: {[key: string] : FinalnaDijagnoza[]}) {
    let data: ReportDataType  = []
    let colorIndex = 0;
    Object.keys(groupedByParam).forEach(k => {
      let gruopByDate : {[key: string]: FinalnaDijagnoza[]} = {}
      groupedByParam[k].forEach(value => {
        let date = formatDate(value.datumPreporuke, "dd.MM.YYYY",  'en-US')
        let list = gruopByDate[date];
        list? list.push(value) : gruopByDate[date] = [value]
      })

      let points : {y: number, label: string}[] = []
      Object.keys(gruopByDate).forEach(date => {
        points.push({y: gruopByDate[date].length, label: date})
      })
      data.push({
          type: "stackedBar",
          name: k,
          showInLegend: "true",
          color: this.colors[colorIndex],
          dataPoints: points
        }
      )
      colorIndex += 1;
    })
    
    return data;
  }



}
