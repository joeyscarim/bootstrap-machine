import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-video02',
  templateUrl: './video02.component.html',
  styleUrls: ['./video02.component.css']
})
export class ElementVideo02Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
