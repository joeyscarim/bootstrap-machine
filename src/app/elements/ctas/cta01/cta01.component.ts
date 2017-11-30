import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-cta01',
  templateUrl: './cta01.component.html',
  styleUrls: ['./cta01.component.css']
})
export class ElementCta01Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
