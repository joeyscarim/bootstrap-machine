import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import {CanActivate, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  currentUser: any;

  constructor(private firebaseAuth: AngularFireAuth,  private router: Router, private toastr: ToastrService) {
    this.user = firebaseAuth.authState;
    this.currentUser = firebaseAuth.auth.currentUser;
  }

  // Returns true if user is logged in
get authenticated(): boolean {
  return this.currentUser !== null;
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
                  user.sendEmailVerification().then(value => {

                      // this is still logging the user in.... how do i stop that?
                    // send them to the confirm email page instead!
                    this.firebaseAuth
                    .auth
                    .signOut();
                    this.router.navigateByUrl('/signup-thanks');
                    // add some confetti to this page !
                    // signup-confirmed

                  });
                }
      })
      .catch(err => {
            this.toastr.error(err.message, 'Error!');
      });
  }

  login(email: string, password: string, errorMessage: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {

        if (user && user.emailVerified === true) {
        this.router.navigateByUrl('/dashboard');
        } else {
          this.firebaseAuth
          .auth
          .signOut();
          // send a new verification email
          user.sendEmailVerification();
          this.toastr.error('Email not verified! Please check your inbox!', 'Error!');
        }
      })
      .catch(err => {
            this.toastr.error(err.message, 'Error!');
      });
  }

  updatePassword(newPassword: string, newPasswordAgain: string) {
    if (newPassword === newPasswordAgain) {
    this.currentUser.updatePassword(newPassword).then(value => {
      // Update successful.
      this.toastr.success('Password updated!', 'Success!');
    }).catch(err => {
      // An error happened.
      this.toastr.error(err.message, 'Error!');
    });
  }else {
    this.toastr.error('Passwords don\'t match!', 'Error!');
  }
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}
