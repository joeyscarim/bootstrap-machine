import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-navbar05',
  templateUrl: './navbar05.component.html',
  styleUrls: ['./navbar05.component.css']
})
export class ElementNavbar05Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
