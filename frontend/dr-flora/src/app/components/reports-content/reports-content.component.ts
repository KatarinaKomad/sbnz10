import { formatDate } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FinalnaDijagnoza } from 'src/app/model/dijagnoza/dijagnoza';
import { ReportDataType, ReportType } from 'src/app/model/report/report';
import { ReportService } from 'src/app/service/report/report.service';

@Component({
  selector: 'app-reports-content',
  templateUrl: './reports-content.component.html',
  styleUrls: ['./reports-content.component.scss']
})
export class ReportsContentComponent implements OnInit, OnChanges{
  
 
  @Input() finalneDijagnoze! : FinalnaDijagnoza[];
  @Input() reportType! : ReportType;
  chartOptions = {};
  chartData: ReportDataType = [];
  
  constructor(private reportService: ReportService){}

  ngOnInit(): void {
    console.log("")
    this.createChartData();
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['finalneDijagnoze']) {
      this.createChartData();
      this.createChart();
    }
  }
 
  createChartData() {
    switch(this.reportType) {
      case ReportType.BOLEST:   
      this.chartData = this.reportService.groupByPlantTypeAndDate(this.finalneDijagnoze);
        break;
      case ReportType.TIP_BILJKE: 
        this.chartData = this.reportService.groupByDeseaseAndDate(this.finalneDijagnoze);
        break;
      case ReportType.PREPARAT: 
          this.chartData = this.reportService.groupByDeseaseAndDate(this.finalneDijagnoze);
          break;
      case ReportType.JAKI_PREPARATI: 
        this.chartData = this.reportService.groupByPreparatAndDate(this.finalneDijagnoze);
        break;
      case ReportType.SLABI_PREPARATI: 
        this.chartData = this.reportService.groupByPreparatAndDate(this.finalneDijagnoze); 
        break;
    }
  }

  createChart() {

    this.chartOptions = {
      backgroundColor: "transparent", //#FEFCF7
      animationEnabled: true,
      exportEnabled: true,
      axisX:{
        title: "Datumi",
        reversed: true,
        titleFontSize: 16,
        titleFontColor: "#9CB392",
        titleFontWeight: "lighter"
      },
      axisY:{
        title: "Broj obolelih",
        includeZero: true,
        titleFontSize: 16,
        titleFontColor: "#9CB392",
        titleFontWeight: "lighter"
      },
      toolTip:  {
        shared: true
      },
      legend: {
        fontWeight: "lighter",
        fontColor: "#40513B"
      },
      data: this.chartData
    }
  }
}
