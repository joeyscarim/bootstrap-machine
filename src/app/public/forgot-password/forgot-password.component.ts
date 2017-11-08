import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: string;

  constructor(private firebaseAuth: AngularFireAuth, public authService: AuthService, private router: Router) {
    this.firebaseAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.router.navigateByUrl('/dashboard');
      }
    });
   }

  ngOnInit() {}

  onSubmit() {
    this.authService.sendForgotPasswordEmail(this.email);
    this.email = '';
    }

}
