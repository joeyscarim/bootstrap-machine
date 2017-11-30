import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-image01',
  templateUrl: './image01.component.html',
  styleUrls: ['./image01.component.css']
})
export class ElementImage01Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
