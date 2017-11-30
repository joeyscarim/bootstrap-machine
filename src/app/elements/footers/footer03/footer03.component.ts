import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-footer03',
  templateUrl: './footer03.component.html',
  styleUrls: ['./footer03.component.css']
})
export class ElementFooter03Component implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
