import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { AddPatiantComponent } from './patients/add-patiant/add-patiant.component';
import { PatientExaminationsDetailsComponent } from './patients/patient-examinations-details/patient-examinations-details.component';
import { DayReportsComponent } from './reports/day-reports/day-reports.component';
import { DoctorSummaryComponent } from './reports/doctor-summary/doctor-summary.component';
import { ViewExpensesComponent } from './reports/view-expenses/view-expenses.component';
import { NetIncomeComponent } from './reports/net-income/net-income.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { NetIncomeOfPeriodComponent } from './reports/net-income-of-period/net-income-of-period.component';
import { ViewComponent } from './appointments/view/view.component';


const routes: Routes = [
  {
    path: 'patients',
    component: PatientsComponent
  },
  {
    path: 'patients/add',
    component: AddPatiantComponent
  },
  {

    path: 'reports/day',
    component: DayReportsComponent
  },
  {
    path: 'reports/DoctorSummary',
    component: DoctorSummaryComponent

  },
  {
    path: 'reports/ViewExpenses',
    component: ViewExpensesComponent

  },
  {
    path: 'reports/net-income',
    component: NetIncomeComponent

  },
  {
    path: 'reports/net-income-period',
    component: NetIncomeOfPeriodComponent

  },
  {
    path: 'appointments/today',
    component: AppointmentsComponent
  },
  {
    path: 'appointments/view',
    component: ViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
