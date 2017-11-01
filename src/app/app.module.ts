import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


// import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

import { routes } from './app.routes';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthGuard} from './core/auth.guard';



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
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { DashboardResourcesComponent } from './dashboard-resources/dashboard-resources.component';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardGalleryComponent } from './dashboard-gallery/dashboard-gallery.component';
import { DashboardBuilderComponent } from './dashboard-builder/dashboard-builder.component';
import { DashboardAccountComponent } from './dashboard-account/dashboard-account.component';

@NgModule({
  declarations: [
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    AppComponent,
    HomeComponent,
    DashboardComponent,
    TemplateBuilderComponent,
    SidemenuComponent,
    DashboardResourcesComponent,
    NavbarComponent,
    DashboardGalleryComponent,
    DashboardBuilderComponent,
    DashboardAccountComponent
  ],
  imports: [
    BrowserModule,
    // NgbModule,
     AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    routes,
    DragulaModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
        ToastrModule.forRoot(), // ToastrModule added

    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
