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

  constructor(private firebaseAuth: AngularFireAuth,public authService: AuthService, public router: Router) {

    this.firebaseAuth.auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        // User is signed in.
              this.router.navigateByUrl('/dashboard');

      } 
    });

   }

  ngOnInit() {
    // if (this.authService.user) {
    //   this.router.navigateByUrl('/dashboard');
    // }
  }

    signup() {
     this.authService.signup(this.email, this.password);
    this.password = this.email = '';
    // this.email = "apple";
    //  this.password = '';
  }

}
