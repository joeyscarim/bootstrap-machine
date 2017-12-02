import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-navbar04',
  templateUrl: './navbar04.component.html',
  styleUrls: ['./navbar04.component.css']
})
export class ElementNavbar04Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
