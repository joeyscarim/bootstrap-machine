import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-column-two-thirds-fill',
  templateUrl: './column-two-thirds-fill.component.html',
  styleUrls: ['./column-two-thirds-fill.component.css']
})
export class ElementColumnTwoThirdsFillComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
