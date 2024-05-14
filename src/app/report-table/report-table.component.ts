import { Component, OnInit } from '@angular/core';
import { Report } from '../report/report.component';
import { ReportsService } from '../reports.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css']
})
export class ReportTableComponent implements OnInit {
  reports: Report[];
  query: string;

  constructor(private rs: ReportsService, private router:Router) {
    this.reports = [];
    this.query = '';
  }

  onReportDelete(evt:{report_id:number}) {
    let del_report_id = evt.report_id;
    this.rs.delete(del_report_id);
    this.reports = this.rs.get();
  }

  ngOnInit(): void {
      this.reports = this.rs.get();
  }

}

