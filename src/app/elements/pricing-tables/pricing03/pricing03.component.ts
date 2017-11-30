import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-pricing03',
  templateUrl: './pricing03.component.html',
  styleUrls: ['./pricing03.component.css']
})
export class ElementPricing03Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
