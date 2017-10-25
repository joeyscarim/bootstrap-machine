import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    email: string;
  password: string;
  errorMessage: string = "no error yet...";

  constructor(public authService: AuthService,) { }

  ngOnInit() {
  }

  login(){
  	console.log("CLICKED!");
    this.authService.login(this.email, this.password, this.errorMessage);
    this.email = this.password = '';
  }

}
