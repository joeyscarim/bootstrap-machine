import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router } from '@angular/router';
import swal from 'sweetalert2';
import { errorHandler } from '@angular/platform-browser/src/browser';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  currentUser: any;
  accessToken: any;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
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

  get currentAccessToken(): any {
    return this.accessToken;
  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    this.firebaseAuth.auth.signInWithPopup(provider).then(result => {
      const token = result.credential.accessToken;
      const user = result.user;
      this.accessToken = token;
      
    }).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      swal('Error', errorMessage, 'error');
    });
  }

  loginWithGithub() {
    const provider = new firebase.auth.GithubAuthProvider();

    this.firebaseAuth.auth.signInWithPopup(provider).then(result => {
      const token = result.credential.accessToken;
      const user = result.user;
      this.accessToken = token;
    }).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      swal('Error', errorMessage, 'error');
    });
  }

  loginWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();

    this.firebaseAuth.auth.signInWithPopup(provider).then(result => {
      const token = result.credential.accessToken;
      const user = result.user;
      this.accessToken = token;
      
    }).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      swal('Error', errorMessage, 'error');
    });
  }

  // signup a new user. this calls login automatically
  signup(email: string, password: string) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password).then(result => {
      const user = result.user;
    }).catch(err => {
      swal('Error', err.message, 'error');
    });
  }

  // login
  login(email: string, password: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(result => {
      const user = result.user;
    })
      .catch(err => {
        swal('Error', err.message, 'error');
      });
  }

  updatePassword(newPassword: string, newPasswordAgain: string) {
    if (newPassword === newPasswordAgain) {
      this.firebaseAuth.auth.currentUser.updatePassword(newPassword).then(value => {
        swal('Success', 'Password updated!', 'success');
      }).catch(err => {
        swal('Error', err.message, 'error');
      });
    } else {
      swal('Error', 'Passowords don\'t match!', 'error');
    }
  }

  sendForgotPasswordEmail(email: string) {
    this.firebaseAuth.auth.sendPasswordResetEmail(email).then(value => {
      swal('Success', 'Password reset email sent!', 'success');
    }).catch(err => {
      swal('Error', err.message, 'error');
    });
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }

}
