import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent implements OnInit {
    email: string;
  password: string;

  constructor(public authService: AuthService,  private router: Router) {}


  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  //  login2() {
  //   this.authService.login(this.email, this.password).then(res => {
  //     this.router.navigateByUrl('/kanban');
  //     console.log("works");
  //   }).catch(err => {
  //     console.log("not works");

  //   });
  //   this.email = this.password = '';
  // }

  login() {

  	// this.authService.login(this.email, this.password).then(function (user) {
  	// });

    // this.authService.login(this.email, this.password);

    // this.authService.login(this.email, this.password).then(res => {
      // this.router.navigateByUrl('/kanban');
    //   console.log("works");
    // }).catch(err => {
    //   console.log("not works");

    // });
    // this.email = this.password = '';

    // .subscribe(
    //             data => {
    //                 // this.router.navigate([this.returnUrl]);
    //             },
    //             error => {
    //                 // this.alertService.error(error);
    //                 // this.loading = false;
    //             });
    // }
    
    //redirect 
//            this.router.navigate(['/members']);


    //blank them out
    // this.email = this.password = '';  
    //redirect

    // this.af.auth.login({
    //   provider: AuthProviders.Google,
    //   method: AuthMethods.Popup,
    // }).then(
    //     (success) => {
    //     this.router.navigate(['/members']);
    //   }).catch(
    //     (err) => {
    //     this.error = err;
    //   })

  }

  logout() {
    this.authService.logout();
  }

    ngOnInit() {
  }
}

