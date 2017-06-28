import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database';
import{AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
import { environment } from "environments/environment";
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { AngularFireAuth  } from 'angularfire2/auth';
import { AuthService } from './providers/auth.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { EmployeemanageComponent } from './employeemanage/employeemanage.component';
import { EmpFilterComponent } from './emp-filter/emp-filter.component';
import { EmpProgramComponent } from './emp-program/emp-program.component';
import { AppIndividualComponent } from './app-individual/app-individual.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    LoginPageComponent,
    EmployeemanageComponent,
    EmpFilterComponent,
    EmpProgramComponent,
    AppIndividualComponent
  ],
  imports: [
    BrowserModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      AppRoutingModule,
      FormsModule,
      NgbModule.forRoot()
  ],
  providers: [AuthService,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
