import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { AddPatiantComponent } from './patients/add-patiant/add-patiant.component';
import { PatientExaminationsDetailsComponent } from './patients/patient-examinations-details/patient-examinations-details.component';


const routes: Routes = [
  {
    path: 'patients',
    component: PatientsComponent
  },
  {

    path: 'examinations-details',
    component: PatientExaminationsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
