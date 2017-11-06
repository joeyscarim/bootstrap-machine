import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    // if (this.authService.user) {
    //   this.router.navigateByUrl('/dashboard');
    // }
  }

    signup() {
     this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

}
