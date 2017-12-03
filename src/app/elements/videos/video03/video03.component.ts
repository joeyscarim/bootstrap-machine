import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-video03',
  templateUrl: './video03.component.html',
  styleUrls: ['./video03.component.css']
})
export class ElementVideo03Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
