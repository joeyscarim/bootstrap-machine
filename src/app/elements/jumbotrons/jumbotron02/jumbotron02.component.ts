import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-jumbotron02',
  templateUrl: './jumbotron02.component.html',
  styleUrls: ['./jumbotron02.component.css']
})
export class ElementJumbotron02Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
