import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-jumbotron03',
  templateUrl: './jumbotron03.component.html',
  styleUrls: ['./jumbotron03.component.css']
})
export class ElementJumbotron03Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
