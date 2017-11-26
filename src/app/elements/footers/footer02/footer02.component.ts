import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-footer02',
  templateUrl: './footer02.component.html',
  styleUrls: ['./footer02.component.css']
})
export class ElementFooter02Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
