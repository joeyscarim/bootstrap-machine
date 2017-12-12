import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-template03',
  templateUrl: './template03.component.html',
  styleUrls: ['./template03.component.css']
})
export class Template03Component implements OnInit {


  constructor(public authService: AuthService,  private router: Router) {}


    ngOnInit() {
  }
}

