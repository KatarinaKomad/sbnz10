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

  groubByDisease(dijagnoze: FinalnaDijagnoza[]) : DijagnozePoParametru  {
    let groupedData: DijagnozePoParametru = {}
    dijagnoze.forEach(dijagnoza => {
      let list = groupedData[dijagnoza.nazivBolesti];
      list? list.push(dijagnoza) : groupedData[dijagnoza.nazivBolesti] = [dijagnoza]
    })
    return groupedData;
  }

  groubByPlantType(dijagnoze: FinalnaDijagnoza[]) : DijagnozePoParametru  {
    let groupedData: DijagnozePoParametru = {}
    dijagnoze.forEach(dijagnoza => {
      let list = groupedData[dijagnoza.nazivtipaBiljke];
      list? list.push(dijagnoza) : groupedData[dijagnoza.nazivtipaBiljke] = [dijagnoza]
    })
    return groupedData;
  }

  groubByPreparat(dijagnoze: FinalnaDijagnoza[]) : DijagnozePoParametru  {
    let groupedData: DijagnozePoParametru = {}
    dijagnoze.forEach(dijagnoza => {
      let list = groupedData[dijagnoza.nazivPreparata];
      list? list.push(dijagnoza) : groupedData[dijagnoza.nazivPreparata] = [dijagnoza]
    })
    return groupedData;
  }

  groupByDeseaseAndDate(dijagnoze: FinalnaDijagnoza[]) : ReportDataType {
    let groupedDataByDiseaseName = this.groubByDisease(dijagnoze);
    return this.groupAll(groupedDataByDiseaseName, dijagnoze);
  }

  groupByPlantTypeAndDate(dijagnoze: FinalnaDijagnoza[]) : ReportDataType {
    let groupedDataByDiseaseName = this.groubByPlantType(dijagnoze);
    return this.groupAll(groupedDataByDiseaseName, dijagnoze);
  }

  groupByPreparatAndDate(dijagnoze: FinalnaDijagnoza[]) : ReportDataType {
    let groupedDataByPreparat = this.groubByPreparat(dijagnoze);
    return this.groupAll(groupedDataByPreparat, dijagnoze);
  }


  groupAll(groupedByParam: DijagnozePoParametru, dijagnoze: FinalnaDijagnoza[]) {
    let data: ReportDataType  = []
    let colorIndex = 0;
    const sviDatumi = dijagnoze
        .map(d => formatDate(d.datumPreporuke, "dd.MM.YYYY",  'en-US'))
        .filter((value, index, array) => array.indexOf(value) === index);

    Object.keys(groupedByParam).forEach( param=> {
      const listaDijagnoza = groupedByParam[param];
      const groupByDate = this.getGroupedByDate(listaDijagnoza);

      let points : Point[] = []
      sviDatumi.forEach( date => {
        Object.keys(groupByDate).includes(date) ? 
          points.push({y: groupByDate[date].length, label: date}) :
          points.push({y: 0, label: date})  
      })
      data.push({
        type: "column",
        name: param,
        showInLegend: "true",
        color: this.colors[colorIndex],
        dataPoints: points
      })
      colorIndex += 1;
    
    })
    
    return data;
  }

  
  getGroupedByDate(listaDijagnoza: FinalnaDijagnoza[]): DijagnozePoParametru {
    let groupByDate: DijagnozePoParametru = {}

    for(let dijagnoza of listaDijagnoza){
      let date = formatDate(dijagnoza.datumPreporuke, "dd.MM.YYYY",  'en-US')      
      Object.keys(groupByDate).includes(date) ? 
        groupByDate[date].push(dijagnoza):
        groupByDate[date] = [dijagnoza]
    }
    return groupByDate;
  }
}

interface Point {
  y: number, 
  label: string
}

interface DijagnozePoParametru {
  [key: string] : FinalnaDijagnoza[]
}