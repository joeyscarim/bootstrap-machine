import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import {CanActivate, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth,  private router: Router, private toastr: ToastrService) {
    this.user = firebaseAuth.authState;
  }

  // Returns true if user is logged in
get authenticated(): boolean {
  return this.firebaseAuth.auth.currentUser !== null;
}

get currentUserObservable(): any {
  return this.user;
}

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
                if (user && user.emailVerified === false) {
                  user.sendEmailVerification().then(function(){
                    this.router.navigateByUrl('/dashboard');
                  });
                }
      })
      .catch(err => {
            this.toastr.error(err.message, 'Error!');
      });
  }

  // TODO: check if verified in this method
  login(email: string, password: string, errorMessage: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigateByUrl('/dashboard');
      })
      .catch(err => {
            this.toastr.error(err.message, 'Error!');
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}
