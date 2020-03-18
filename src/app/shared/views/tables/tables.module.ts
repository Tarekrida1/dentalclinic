import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { SharedModule } from '../../shared.module';
import { PatientsComponent } from './patients/patients.component';
import { AddPatiantComponent } from './patients/add-patiant/add-patiant.component';
import { PatientExaminationsDetailsComponent } from './patients/patient-examinations-details/patient-examinations-details.component';



@NgModule({
  declarations: [PatientsComponent, AddPatiantComponent, PatientExaminationsDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    TablesRoutingModule
  ]
})
export class TablesModule { }
