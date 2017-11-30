import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-image02',
  templateUrl: './image02.component.html',
  styleUrls: ['./image02.component.css']
})
export class ElementImage02Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
