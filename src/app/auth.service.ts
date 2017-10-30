import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth,  private router: Router, private toastr: ToastrService) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        // console.log('Success!', value);
                this.router.navigateByUrl('/dashboard');

      })
      .catch(err => {
        // console.log('Something went wrong:',err.message);
        // alert(err.message);
            this.toastr.error(err.message, 'Error!');

      });    
  }

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