import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportTableComponent } from './report-table/report-table.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ReportViewComponent } from './report-view/report-view.component';

const routes: Routes = [
  { path: 'nct_home', component: ReportTableComponent },
  { path: 'reports/add', component: CreateFormComponent },
  { path: 'reports/:id', component: ReportViewComponent },
  { path: '', redirectTo: '/nct_home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
