import { Injectable, OnInit } from '@angular/core';
import { Report } from './report/report.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  reports:Report[];
  constructor(private http: HttpClient) { 
    this.reports = [];
  }

  get() {
    // call to the backend DB
    this.reports = [];
    this.http.get('https://REDACTED/collections/nct_reports/documents/')
      .subscribe((data:any)=>{
        data.forEach((element:any) => {
          this.reports.push(element.data);
        })
      }
      );
    return this.reports;
  }

  getNoUpdate() {
    return this.reports;
  }

  add(newReport:Report) {
    newReport.added_on = new Date().getTime();
    newReport.id = new Date().getTime();
    this.http.post('https://REDACTED/collections/nct_reports/documents/',{
      "key": newReport.id.toString(),
      "data": newReport
    }).subscribe((data:any)=>{
        console.log(data);
      })
  }

  delete(del_report:number) {
    this.http.delete('https://REDACTED/collections/nct_reports/documents/'+del_report)
    .subscribe((data:any)=>{
      })
  }

  updateStatus(report_id:number, solved:boolean) {
    let r:Report = this.findReport(report_id);
    r.solved = solved;
    this.http.put('https://REDACTED/collections/nct_reports/documents/'+report_id,{
      "key": report_id.toString(),
      "data": r
    }).subscribe((data:any)=>{
      })
  }

  findReport(report_id:number): Report {
    return this.reports.find((r:Report) => r.id == report_id)!;
  }
}

