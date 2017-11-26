import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-element-column-halves',
  templateUrl: './column-halves.component.html',
  styleUrls: ['./column-halves.component.css']
})
export class ElementColumnHalvesComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
