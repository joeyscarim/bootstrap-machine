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
// currentUserInstant: any;
// quickCheck = 'MEOW';

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

checkVerification(): any {
  this.firebaseAuth.auth.onAuthStateChanged(user => {
    if (user) {
      console.log(user);
      // User is signed in.
      this.firebaseAuth.auth.signOut();
      user.sendEmailVerification();
      this.router.navigateByUrl('/signup-thanks');
      // return "found em";
    } else {
      console.log("NOT FOUND");
      // No user is signed in.
      // return "error";
    }
  });
}

getCurrentUser(): any{
  this.firebaseAuth.auth.onAuthStateChanged(user => {
    if (user) {
      console.log(user);
      // User is signed in.
      return "found em";
    } else {
      console.log("NOT FOUND");
      // No user is signed in.
      return "error";
    }
  });
}

  // signup a new user. this calls login automatically
  // TODO: since login is auto called, instead just have it check there?
  signup(email: string, password: string) {
    console.log("doing the signup");
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password).then(user => {
      this.firebaseAuth.auth.signOut();
      user.sendEmailVerification();
      this.router.navigateByUrl('/signup-thanks');
    }).catch(err => {
      this.toastr.error(err.message, 'Error!');
    });
  }

  // login
  login(email: string, password: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(user => {
        //I THINK THIS IS WHAT IS FAILING!!! 
      if (user && user.emailVerified === true) {
        console.log("whooooooops");
        this.router.navigateByUrl('/dashboard');
        } else {
          console.log("made it here....");
          this.firebaseAuth.auth.signOut();
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
    this.firebaseAuth.auth.currentUser.updatePassword(newPassword).then(value => {
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



  sendForgotPasswordEmail(email: string) {
    // var auth = firebase.auth();
    // var emailAddress = "user@example.com";

    this.firebaseAuth
    .auth.sendPasswordResetEmail(email).then(value => {
      // Email sent.
      this.toastr.success('Password reset email sent!', 'Success!');
    }).catch(err => {
      // An error happened.
      this.toastr.error(err.message, 'Error!');
    });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}
