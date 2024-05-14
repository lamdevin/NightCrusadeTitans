import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Report } from '../report/report.component';
import { ReportsService } from '../reports.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {
  id:number;
  @Input() report: Report;
  
  constructor(private rs: ReportsService, private ActivatedRoute:ActivatedRoute, private router:Router) {
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.report = {
      id: -1,
      location: "LocationName",
      latitude: 49.2276, 
      longitude: -123.0076,
      name: "BaddieName",
      added_on: new Date().getTime(),
      solved: false,
      info: "Extra_Info",
      sent_by: "Reporter_Name",
      phone: "123-555-5555",
      photo: "photo_link"
    }
  }
  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.report = this.rs.findReport(this.id);
  }

  onReportStatusChange(evt: {report_id:number, solved:boolean}) {
    this.rs.updateStatus(evt.report_id, evt.solved);
  }

  onReportDelete(evt: {report_id:number}) {
    this.rs.delete(evt.report_id);
    this.router.navigate(["/"]);
  }

}
