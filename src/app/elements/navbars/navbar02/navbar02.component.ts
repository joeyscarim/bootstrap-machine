import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-navbar02',
  templateUrl: './navbar02.component.html',
  styleUrls: ['./navbar02.component.css']
})
export class ElementNavbar02Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
