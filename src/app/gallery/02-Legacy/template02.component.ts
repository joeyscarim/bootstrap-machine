import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-template02',
  templateUrl: './template02.component.html',
  styleUrls: ['./template02.component.css']
})
export class Template02Component implements OnInit {


  constructor(public authService: AuthService,  private router: Router) {}


    ngOnInit() {
  }
}

