import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-navbar06',
  templateUrl: './navbar06.component.html',
  styleUrls: ['./navbar06.component.css']
})
export class ElementNavbar06Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
