import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutsComponent } from './home-layouts/home-layouts.component';
import { TableLayoutsComponent } from './table-layouts/table-layouts.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';



@NgModule({
  declarations: [HomeLayoutsComponent, TableLayoutsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class LayoutsModule { }
