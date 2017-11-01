import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

// import { AngularFireAuth, AngularFireDatabase, FirebaseAuthState, AuthProviders, AuthMethods, AngularFire } from "angularfire2";

import { Observable } from 'rxjs/Observable';

import {CanActivate, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs/Rx";
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/take';


@Injectable()
export class AuthService {

  user: Observable<firebase.User>;

  // authState: FirebaseAuthState = null;
  
  constructor(private firebaseAuth: AngularFireAuth,  private router: Router, private toastr: ToastrService) {
    this.user = firebaseAuth.authState;

    // firebaseAuth.auth.subscribe((auth) => {
    //   this.authState = auth;
    // });
  }

  // canActivate(): Observable<boolean> {
  //   return Observable.from(this.firebaseAuth)
  //   .take(1)
  //     .map(state => !!state)
  //     .do(authenticated => {
  //   if (!authenticated) {
  //   this.router.navigate([ '/login' ]);
  //   }
  //   });
  // }

  // Returns true if user is logged in
get authenticated(): boolean {
  // console.log("authenticating...." + this.firebaseAuth.authState);
  return this.firebaseAuth.auth.currentUser !== null;
  // return false;
  // return this.user
}

get currentUserObservable(): any {
  console.log("it's " + this.firebaseAuth.auth);
  return this.user;
  // .auth;
}

// get verified(): boolean {
//   return this.firebaseAuth.auth.emailVerified;
// }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        // console.log('Success!', value);
                // this.router.navigateByUrl('/dashboard');
                if (user && user.emailVerified === false){
                  user.sendEmailVerification().then(function(){
                    console.log("email verification sent to user");
                    this.router.navigateByUrl('/dashboard');

                  });
                }

                  //send to signup page!


      })
      .catch(err => {
        // console.log('Something went wrong:',err.message);
        // alert(err.message);
            this.toastr.error(err.message, 'Error!');

      });    
  }

  //TODO: check if verified in this method
  login(email: string, password: string, errorMessage: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        //do the routing here
        // console.log('Nice, it worked!');
        this.router.navigateByUrl('/dashboard');

        // errorMessage = "it worked!";
        // return errorMessage;
      })
      .catch(err => {
        // console.log('Something went wrong:',err.message);
        // errorMessage = err.message;
        // alert(err.message);
            this.toastr.error(err.message, 'Error!');


      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}
