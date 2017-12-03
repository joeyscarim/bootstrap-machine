import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-cta02',
  templateUrl: './cta02.component.html',
  styleUrls: ['./cta02.component.css']
})
export class ElementCta02Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
