import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-pricing01',
  templateUrl: './pricing01.component.html',
  styleUrls: ['./pricing01.component.css']
})
export class ElementPricing01Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
