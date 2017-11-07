import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    email: string;
  password: string;
  errorMessage = 'no error yet...';

  constructor(private firebaseAuth: AngularFireAuth, public authService: AuthService, private router: Router) {
  
    // console.log("INSTANT: " + authService.quickCheck);
    // console.log("INSTANT: " + authService.currentUserInstant);
    
    // if (authService.currentUserInstant === true){
    //                 this.router.navigateByUrl('/dashboard');
    // }
    this.firebaseAuth.auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        // User is signed in.
              this.router.navigateByUrl('/dashboard');

      }
    });

   }

  onSubmit() {
    this.authService.login(this.email, this.password, this.errorMessage);
    this.password = '';
    }

}
