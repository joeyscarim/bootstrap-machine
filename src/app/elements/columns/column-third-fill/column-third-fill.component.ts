import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-column-third-fill',
  templateUrl: './column-third-fill.component.html',
  styleUrls: ['./column-third-fill.component.css']
})
export class ElementColumnThirdFillComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
