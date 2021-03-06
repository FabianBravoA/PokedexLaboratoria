import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {Observable} from 'rxjs';

@Injectable()
export class AuthService {
  user : Observable<firebase.User>;

  constructor(private firebaseAuth:AngularFireAuth) { 
    this.user = firebaseAuth.authState;
  }

  signup(email:string, password:string){
    this.firebaseAuth
    .auth
    .createUserWithEmailAndPassword(email, password)
    .then((value)=>{
      console.log("Se ha registrado con éxito");
    }).catch((err)=>{
      console.log("Falló el registro > "+err);
    });
  }

  login(email:string, password:string){
    this.firebaseAuth
    .auth
    .signInWithEmailAndPassword(email, password)
    .then((value)=>{
      console.log("Login exitoso");
    })
    .catch((err)=>{
      console.log("No se pudo log-in > "+err);
    });
  }

  logout(){
    this.firebaseAuth
    .auth
    .signOut();
  }
}
