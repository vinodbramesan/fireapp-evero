import { Injectable } from '@angular/core';
import { AngularFireAuth  } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(public af:AngularFireAuth) { }
onLogin(){
  return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}
onLogOut(){
 return this.af.auth.signOut();
}
}
