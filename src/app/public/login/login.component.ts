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

  constructor(private firebaseAuth: AngularFireAuth, public authService: AuthService, private router: Router) {
    this.firebaseAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.router.navigateByUrl('/dashboard');
      }
    });
   }

  ngOnInit() {}

  onSubmit() {
    this.authService.login(this.email, this.password);
    this.password = '';
    }
    
    loginWithGoogle() {
      alert("I worked!");
      this.authService.loginWithGoogle2();
      // this.password = '';
      }


}
