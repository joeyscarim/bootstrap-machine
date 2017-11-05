import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../core/auth.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  constructor(public authService: AuthService) { }
  
  ngOnInit() {
  }

}
