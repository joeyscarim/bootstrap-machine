import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import {CanActivate, Router} from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import swal from 'sweetalert';
// import * as swal from 'sweetalert';
import swal from 'sweetalert2';

import { errorHandler } from '@angular/platform-browser/src/browser';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  currentUser: any;
// currentUserInstant: any;
// quickCheck = 'MEOW';

  constructor(private firebaseAuth: AngularFireAuth,  private router: Router) {
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



  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    this.firebaseAuth.auth.signInWithPopup(provider).then(result => {
      const token = result.credential.accessToken;
      const user = result.user;
    }).catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = error.credential;
          swal ( 'Error' ,  errorMessage ,  'error' );
    });
  }

  loginWithGithub() {
    const provider = new firebase.auth.GithubAuthProvider();

    this.firebaseAuth.auth.signInWithPopup(provider).then(result => {
      const token = result.credential.accessToken;
      const user = result.user;
    }).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      swal ( 'Error' ,  errorMessage ,  'error' );
    });
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }

}
