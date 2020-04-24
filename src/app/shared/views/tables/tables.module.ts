import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { SharedModule } from '../../shared.module';
import { PatientsComponent } from './patients/patients.component';
import { AddPatiantComponent } from './patients/add-patiant/add-patiant.component';
import { PatientExaminationsDetailsComponent } from './patients/patient-examinations-details/patient-examinations-details.component';
import { DayReportsComponent } from './reports/day-reports/day-reports.component';
import { DoctorSummaryComponent } from './reports/doctor-summary/doctor-summary.component';
import { ViewExpensesComponent } from './reports/view-expenses/view-expenses.component';
import { AddExpensesComponent } from './reports/view-expenses/add-expenses/add-expenses.component';
import { NetIncomeComponent } from './reports/net-income/net-income.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { NetIncomeOfPeriodComponent } from './reports/net-income-of-period/net-income-of-period.component';
import { ViewComponent } from './appointments/view/view.component';



@NgModule({
  declarations: [PatientsComponent, AddPatiantComponent, PatientExaminationsDetailsComponent, DayReportsComponent, DoctorSummaryComponent, ViewExpensesComponent, AddExpensesComponent, NetIncomeComponent, AppointmentsComponent, NetIncomeOfPeriodComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    TablesRoutingModule
  ]
})
export class TablesModule { }
