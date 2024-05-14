import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Report } from '../report/report.component';
import { Router } from '@angular/router';

@Component({
  selector: 'tr[app-report-row]',
  templateUrl: './report-row.component.html',
  styleUrls: ['./report-row.component.css']
})
export class ReportRowComponent {
  @Input() report: Report;
  @Output() delete = new EventEmitter();
  @Output() view = new EventEmitter();
  constructor(private router:Router) {
    this.report = 
    {
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

  onView() {
    this.router.navigate(['/reports',this.report.id]);
  }

  onDelete(evt:any, report_id:number) {
    evt["report_id"] = report_id;
    this.delete.emit(evt);
  }

}
