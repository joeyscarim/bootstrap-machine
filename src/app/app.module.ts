import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// public
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { SignupComponent } from './public/signup/signup.component';
import { ForgotPasswordComponent } from './public/forgot-password/forgot-password.component';
import { SignupThanksComponent } from './public/signup-thanks/signup-thanks.component';
import { UsageRulesComponent } from './public/usage-rules/usage-rules.component';
import { PrivacyPolicyComponent } from './public/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './public/terms-and-conditions/terms-and-conditions.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';

// partials
import { SidemenuComponent } from './partials/sidemenu/sidemenu.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { FooterComponent } from './partials/footer/footer.component';

// gallery
import { Template01Component } from './gallery/01-Launchpad/template01.component';
import { Template02Component } from './gallery/02-Legacy/template02.component';

// elements
import { ElementNavbar01Component } from './elements/navbars/navbar01/navbar01.component';
import { ElementNavbar02Component } from './elements/navbars/navbar02/navbar02.component';
import { ElementNavbar03Component } from './elements/navbars/navbar03/navbar03.component';

import { ElementFooter01Component } from './elements/footers/footer01/footer01.component';
import { ElementFooter02Component } from './elements/footers/footer02/footer02.component';
import { ElementFooter03Component } from './elements/footers/footer03/footer03.component';

import { ElementPricing01Component } from './elements/pricing-tables/pricing01/pricing01.component';
import { ElementPricing02Component } from './elements/pricing-tables/pricing02/pricing02.component';
import { ElementPricing03Component } from './elements/pricing-tables/pricing03/pricing03.component';

import { ElementImage01Component } from './elements/image/image01/image01.component';
import { ElementImage02Component } from './elements/image/image02/image02.component';

import { ElementCta01Component } from './elements/ctas/cta01/cta01.component';

import { ElementJumbotron01Component } from './elements/jumbotrons/jumbotron01/jumbotron01.component';
import { ElementJumbotron02Component } from './elements/jumbotrons/jumbotron02/jumbotron02.component';

import { ElementColumnHalvesComponent } from './elements/columns/column-halves/column-halves.component';
import { ElementColumnThirdsComponent } from './elements/columns/column-thirds/column-thirds.component';
import { ElementColumnFourthsComponent } from './elements/columns/column-fourths/column-fourths.component';
import { ElementColumnThirdFillComponent } from './elements/columns/column-third-fill/column-third-fill.component';
import { ElementColumnTwoThirdsFillComponent } from './elements/columns/column-two-thirds-fill/column-two-thirds-fill.component';

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
import { ClipboardModule } from 'ngx-clipboard';

// dashboard components
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { DashboardResourcesComponent } from './dashboard/dashboard-resources/dashboard-resources.component';
import { DashboardBuilderComponent } from './dashboard/dashboard-builder/dashboard-builder.component';
import { DashboardGalleryComponent } from './dashboard/dashboard-gallery/dashboard-gallery.component';
import { DashboardAccountComponent } from './dashboard/dashboard-account/dashboard-account.component';
import { DashboardBuilderEditComponent } from './dashboard/builder-edit/builder-edit.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AppComponent,
    HomeComponent,
    DashboardHomeComponent,
    DashboardBuilderEditComponent,
    SidemenuComponent,
    ForgotPasswordComponent,
    SignupThanksComponent,
    DashboardResourcesComponent,
    NavbarComponent,
    DashboardGalleryComponent,
    DashboardBuilderComponent,
    DashboardAccountComponent,

    Template01Component,
    Template02Component,

    FooterComponent,
    UsageRulesComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    PageNotFoundComponent,

    ElementNavbar01Component,
    ElementNavbar02Component,
    ElementNavbar03Component,

    ElementFooter01Component,
    ElementFooter02Component,
    ElementFooter03Component,

    ElementPricing01Component,
    ElementPricing02Component,
    ElementPricing03Component,

    ElementCta01Component,

    ElementJumbotron01Component,
    ElementJumbotron02Component,
    ElementColumnHalvesComponent,

    ElementColumnThirdsComponent,
    ElementColumnFourthsComponent,
    ElementColumnThirdFillComponent,
    ElementColumnTwoThirdsFillComponent,

    ElementImage01Component,
    ElementImage02Component
  ],
  imports: [
    BrowserModule,
    // NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    ClipboardModule,
    routes,
    DragulaModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
