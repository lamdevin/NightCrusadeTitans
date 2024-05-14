import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ReportsService } from '../reports.service';
import { Report } from "../report/report.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent{
  form: FormGroup;

  constructor(private rs:ReportsService, private router:Router) {
    let formControls = {
      name: new FormControl('',[
        Validators.required
      ]),
      location: new FormControl('',[
        Validators.required
      ]),
      longitude: new FormControl('',[
        Validators.required
      ]),
      latitude: new FormControl('',[
        Validators.required
      ]),
      sent_by: new FormControl('',[
        Validators.required
      ]),
      phone: new FormControl('',[
        Validators.required
      ]),
      photo: new FormControl(''),
      info: new FormControl(''),
    }

    this.form = new FormGroup(formControls);
  }

  onSubmit(newReport: Report) {
    this.rs.add(newReport);
    this.router.navigate(["/"])
  }
}
