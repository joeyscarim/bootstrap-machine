import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-dashboard-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class DashboardAccountComponent implements OnInit {

  newPassword: string;
  newPasswordAgain: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  updatePassword() {
    this.authService.updatePassword(this.newPassword, this.newPasswordAgain);
    this.newPassword = this.newPasswordAgain = '';
  }

}
