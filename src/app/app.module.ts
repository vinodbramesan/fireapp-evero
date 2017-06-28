import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database';
import{AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
import { environment } from "environments/environment";
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { AngularFireAuth  } from 'angularfire2/auth';
import { AuthService } from './providers/auth.service';
import { LoginPageComponent } from './login-page/login-page.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      AppRoutingModule,
      FormsModule
  ],
  providers: [AuthService,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
