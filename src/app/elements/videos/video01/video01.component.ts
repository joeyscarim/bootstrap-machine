import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-video01',
  templateUrl: './video01.component.html',
  styleUrls: ['./video01.component.css']
})
export class ElementVideo01Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
