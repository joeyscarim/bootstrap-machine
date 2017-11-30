import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-navbar03',
  templateUrl: './navbar03.component.html',
  styleUrls: ['./navbar03.component.css']
})
export class ElementNavbar03Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
