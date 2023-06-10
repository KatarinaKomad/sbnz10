import { Component } from '@angular/core';
import { FinalnaDijagnoza } from 'src/app/model/dijagnoza/dijagnoza';
import { ReportType } from 'src/app/model/report/report';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.scss']
})
export class ReportsPageComponent {
  
  reportData : FinalnaDijagnoza[] = [];
  reportType: ReportType = ReportType.BOLEST;

  handleEvent(data: FinalnaDijagnoza[]) {
    this.reportData = data;
  }

  handleReportTypeEvent(data: ReportType) {
    this.reportType = data;
  }
}
