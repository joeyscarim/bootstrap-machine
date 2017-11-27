import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;

  constructor(private firebaseAuth: AngularFireAuth, public authService: AuthService, public router: Router) {
    this.firebaseAuth.auth.onAuthStateChanged(user => {
        if (user && user.emailVerified === true) {
        this.router.navigateByUrl('/dashboard');
      }
    });
   }

  ngOnInit() {}

  onSubmit() {
    console.log("Submitted");
    console.log("Username is " + this.email);
    console.log("Password is " + this.password);
    
    this.authService.signup(this.email, this.password);
    this.password = this.email = '';
  }

  loginWithGoogle() {
    // alert("I worked!");
    this.authService.loginWithGoogle2();
    // this.password = '';
    }

    loginWithGithub() {
      // alert("I worked!");
      this.authService.loginWithGithub();
      // this.password = '';
      }

}
