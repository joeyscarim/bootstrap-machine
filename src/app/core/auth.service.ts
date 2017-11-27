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

  signupWithGoogle() {

  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    return this.firebaseAuth.auth.signInWithRedirect(provider);
  }
loginWithGoogle3(){
  // this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  
}
  loginWithGoogle2() {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    this.firebaseAuth.auth.signInWithPopup(provider).then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // console.log("token is " + token);
      // console.log("user is " + user);
      
      // ...
    }).catch(error => {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;

          // alert("error!");
          const errorCode = error.code;
          const errorMessage = error.message;
    
          // The email of the user's account used.
          const email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          const credential = error.credential;
    
          this.toastr.error(errorMessage, 'Error!');
      // ...
    });
  }

  loginWithGithub() {
    const provider = new firebase.auth.GithubAuthProvider();
    
    firebase.auth().signInWithPopup(provider).then(result => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // console.log("token is " + token);
      // console.log("user is " + user);
      this.router.navigateByUrl('/dashboard');
      
      // ...
    }).catch(error => {
      // Handle Errors here.
      // alert("error!");
      const errorCode = error.code;
      const errorMessage = error.message;

      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;

      this.toastr.error(errorMessage, 'Error!');

      // ...
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
