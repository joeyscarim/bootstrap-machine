import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usage-rules',
  templateUrl: './usage-rules.component.html',
  styleUrls: ['./usage-rules.component.css']
})
export class UsageRulesComponent implements OnInit {
    email: string;
  password: string;

  constructor(public authService: AuthService,  private router: Router) {}



    ngOnInit() {
  }
}

