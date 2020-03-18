import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutsComponent } from './shared/components/layouts/home-layouts/home-layouts.component';
import { TableLayoutsComponent } from './shared/components/layouts/table-layouts/table-layouts.component';
import { LoginRegistrationComponent } from './shared/components/login-registration/login-registration.component';


const routes: Routes = [
{
  path: '',
  component: HomeLayoutsComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./shared/views/pages/pages.module').then(m => m.PagesModule)
    }
  ]
},
{
  path: 'dashboard',
  component: TableLayoutsComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./shared/views/tables/tables.module').then(m => m.TablesModule)
    }
  ]
},
{
  path: 'login',
  component: LoginRegistrationComponent,

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
