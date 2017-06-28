import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  items: FirebaseListObservable<any>;
  employeeID: number;
  empName: string;
  constructor(private _db: AngularFireDatabase, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.items = this._db.list('/Employees');
  }
  SignOut() {
    this.auth.onLogOut();
    this.router.navigate(['Login']);
  }
  AddItem() {
    this.items.push({ EmployeeID: this.employeeID, EmployeeName: this.empName });
    this.clear();
  }
  clear() {
    this.employeeID = 0;
    this.empName = "";
  }
  removeItem(emp:any){
    console.log(emp.$key);
    this.items.remove(emp.$key);
  }
}
