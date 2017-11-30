import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-pricing-02',
  templateUrl: './pricing02.component.html',
  styleUrls: ['./pricing02.component.css']
})
export class ElementPricing02Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
