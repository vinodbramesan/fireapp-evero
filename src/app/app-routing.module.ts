import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeemanageComponent } from './employeemanage/employeemanage.component';
import { LoginPageComponent } from './login-page/login-page.component';


const appRoutes: Routes = [
  { path: 'Employeelist', component: EmployeelistComponent },
  { path: 'Login', component: LoginPageComponent },
  { path: 'Manage', component: EmployeemanageComponent},
  { path: '', redirectTo: '/Employeelist', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}