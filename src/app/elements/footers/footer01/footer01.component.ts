import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-footer01',
  templateUrl: './footer01.component.html',
  styleUrls: ['./footer01.component.css']
})
export class ElementFooter01Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
