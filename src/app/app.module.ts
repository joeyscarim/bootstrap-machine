import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


// import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { routes } from './core/app.routes';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthGuard} from './core/auth.guard';




import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './core/auth.service';
import { HomeComponent } from './home/home.component';
import { TemplateBuilderComponent } from './template-builder/template-builder.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';

// dashboard components
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import {DashboardResourcesComponent} from './dashboard/dashboard-resources/dashboard-resources.component';
import {DashboardBuilderComponent} from './dashboard/dashboard-builder/dashboard-builder.component';
import {DashboardGalleryComponent} from './dashboard/dashboard-gallery/dashboard-gallery.component';
import {DashboardAccountComponent} from './dashboard/dashboard-account/dashboard-account.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AppComponent,
    HomeComponent,
    DashboardHomeComponent,
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
