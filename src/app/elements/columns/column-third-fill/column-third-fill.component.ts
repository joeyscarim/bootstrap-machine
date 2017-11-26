import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-navbar01',
  templateUrl: './navbar01.component.html',
  styleUrls: ['./navbar01.component.css']
})
export class ElementNavbar01Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
