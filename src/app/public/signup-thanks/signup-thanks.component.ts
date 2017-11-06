import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-signup-thanks',
  templateUrl: './signup-thanks.component.html',
  styleUrls: ['./signup-thanks.component.css']
})
export class SignupThanksComponent implements OnInit {

 

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

 

}
