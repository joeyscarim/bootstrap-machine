import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-footer04',
  templateUrl: './footer04.component.html',
  styleUrls: ['./footer04.component.css']
})
export class ElementFooter04Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
