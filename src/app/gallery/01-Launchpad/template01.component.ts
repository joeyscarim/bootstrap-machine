import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-template01',
  templateUrl: './template01.component.html',
  styleUrls: ['./template01.component.css']
})
export class Template01Component implements OnInit {


  constructor(public authService: AuthService,  private router: Router) {}


    ngOnInit() {
  }
}

