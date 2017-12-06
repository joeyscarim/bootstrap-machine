import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../core/auth.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  constructor(public authService: AuthService) {
    
    // authService.checkVerification();

   }
  
  ngOnInit() {
  }

}
