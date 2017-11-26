import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-column-thirds',
  templateUrl: './column-thirds.component.html',
  styleUrls: ['./column-thirds.component.css']
})
export class ElementColumnThirdsComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
