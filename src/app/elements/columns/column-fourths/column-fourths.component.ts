import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-column-fourths',
  templateUrl: './column-fourths.component.html',
  styleUrls: ['./column-fourths.component.css']
})
export class ElementColumnFourthsComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
