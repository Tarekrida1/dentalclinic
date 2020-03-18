import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],

})
export class PagesModule { }
