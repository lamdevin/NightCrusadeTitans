import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  validLogin: boolean;

  @Input() report: Report;
  @Output() delete = new EventEmitter();
  @Output() statusChange = new EventEmitter();
  
  constructor(private router:Router) {
    this.validLogin = false;
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

  onDelete(evt:any, report_id:number) {
    evt["report_id"] = report_id;
    this.delete.emit(evt);
  }

  onStatusChange(evt: any, report_id:number, solved:boolean) {
    evt["report_id"] = report_id;
    evt["solved"] = solved;
    this.statusChange.emit(evt);
  }

  onLogin() {
    this.validLogin = true;
  }

}

export class Report {
  constructor (
    public id: number,
    public location: string,
    public latitude: number,
    public longitude: number,
    public name: string,
    public added_on: number,
    public solved: boolean,
    public info: string,
    public sent_by: string,
    public phone: string,
    public photo: string
  ) {}
}
