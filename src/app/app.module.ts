import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// public
import { LoginComponent } from './public/login/login.component';
import { SignupComponent } from './public/signup/signup.component';
import { HomeComponent } from './public/home/home.component';

// core
import { routes } from './core/app.routes';
import { AuthGuard} from './core/auth.guard';
import { AuthService } from './core/auth.service';

// imports
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ToastrModule } from 'ngx-toastr';

// partials
import { SidemenuComponent } from './partials/sidemenu/sidemenu.component';
import { NavbarComponent } from './partials/navbar/navbar.component';

// dashboard components
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import {DashboardResourcesComponent} from './dashboard/dashboard-resources/dashboard-resources.component';
import {DashboardBuilderComponent} from './dashboard/dashboard-builder/dashboard-builder.component';
import {DashboardGalleryComponent} from './dashboard/dashboard-gallery/dashboard-gallery.component';
import {DashboardAccountComponent} from './dashboard/dashboard-account/dashboard-account.component';
import {DashboardBuilderEditComponent} from './dashboard/builder-edit/builder-edit.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AppComponent,
    HomeComponent,
    DashboardHomeComponent,
    DashboardBuilderEditComponent,
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
