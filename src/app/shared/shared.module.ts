import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import { SidebarModule } from 'ng-sidebar';
import { HomeLayoutsComponent } from './components/layouts/home-layouts/home-layouts.component';
import { TableLayoutsComponent } from './components/layouts/table-layouts/table-layouts.component';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import {TableModule} from 'primeng/table';
import {ContextMenuModule} from 'primeng/contextmenu';
import {MenuModule} from 'primeng/menu';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {FileUploadModule} from 'primeng/fileupload';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';
import {CheckboxModule} from 'primeng/checkbox';
import { LoginRegistrationComponent } from './components/login-registration/login-registration.component';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {RadioButtonModule} from 'primeng/radiobutton';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};



@NgModule({
  declarations: [HomeLayoutsComponent, TableLayoutsComponent,NavbarComponent, SidenavComponent, FooterComponent, AddReservationComponent, LoginRegistrationComponent],
  imports: [
    CommonModule,
    // LayoutsModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    NgbModule,
    RouterModule,
    SwiperModule,
    SlideMenuModule,
    SidebarModule.forRoot(),
    TableModule, ContextMenuModule, MenuModule, TieredMenuModule,FileUploadModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 5000,
      extendedTimeOut: 2000,
      progressBar: true
    }) ,
    NgxSpinnerModule,
    CheckboxModule,
    CalendarModule,
    PanelModule,
    RadioButtonModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    SwiperModule,
    SidenavComponent,
    SidebarModule,
    FooterComponent,
    TableModule, ContextMenuModule, MenuModule, TieredMenuModule,FileUploadModule,
    ToastrModule ,
    NgxSpinnerModule,DropdownModule,
    HttpClientModule,
    FormsModule,
    AddReservationComponent,
    CheckboxModule,
    CalendarModule,
    PanelModule,
    RadioButtonModule
  ]
})
export class SharedModule { }
