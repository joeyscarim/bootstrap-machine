import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-jumbotron01',
  templateUrl: './jumbotron01.component.html',
  styleUrls: ['./jumbotron01.component.css']
})
export class ElementJumbotron01Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
