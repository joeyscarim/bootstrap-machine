import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


// import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

import { routes } from './app.routes';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';


// export const firebaseConfig = {
//     apiKey: "AIzaSyDURLn-II17DztsSM-Ilvg63JAt8OozIxM",
//     authDomain: "bootstrap-machine.firebaseapp.com",
//     databaseURL: "https://bootstrap-machine.firebaseio.com",
//     projectId: "bootstrap-machine",
//     storageBucket: "bootstrap-machine.appspot.com",
//     messagingSenderId: "252376714310"
// };
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateBuilderComponent } from './template-builder/template-builder.component';

@NgModule({
  declarations: [
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    AppComponent,
    HomeComponent,
    DashboardComponent,
    TemplateBuilderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
     AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    routes,
    DragulaModule
    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }