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
        if (user) {
        this.router.navigateByUrl('/dashboard');
      }
    });
   }

  ngOnInit() {}

  loginWithGoogle() {
    this.authService.loginWithGoogle();
    }

    loginWithGithub() {
      this.authService.loginWithGithub();
      }

      loginWithFacebook() {
        this.authService.loginWithFacebook();
        }

        onSubmit(){
          
        }

}
