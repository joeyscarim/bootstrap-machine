import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './../app.component';

// public
import { LoginComponent } from './../public/login/login.component';
import { HomeComponent } from './../public/home/home.component';
import { SignupComponent } from './../public/signup/signup.component';
import { SignupThanksComponent } from './../public/signup-thanks/signup-thanks.component';
import { ForgotPasswordComponent } from './../public/forgot-password/forgot-password.component';
import { UsageRulesComponent } from './../public/usage-rules/usage-rules.component';
import { PrivacyPolicyComponent } from './../public/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './../public/terms-and-conditions/terms-and-conditions.component';
import { PageNotFoundComponent } from './../public/page-not-found/page-not-found.component';

// gallary
import { Template01Component } from './../gallery/01-Launchpad/template01.component';
import { Template02Component } from './../gallery/02-Legacy/template02.component';

// core
import { AuthGuard } from './auth.guard';

// dashboard
import { DashboardHomeComponent } from './../dashboard/home/home.component';
import {DashboardResourcesComponent} from './../dashboard/resources/resources.component';
import {DashboardBuilderComponent} from './../dashboard/builder/builder.component';
import {DashboardGalleryComponent} from './../dashboard/gallery/gallery.component';
import {DashboardAccountComponent} from './../dashboard/account/account.component';
import {DashboardBuilderEditComponent} from './../dashboard/edit/edit.component';

export const router: Routes = [

    // public routes
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signup-thanks', component: SignupThanksComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'usage-license', component: UsageRulesComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'terms-and-conditions', component: TermsAndConditionsComponent },

    // gallery
    { path: 'gallery/01-launchpad', component: Template01Component },
    { path: 'gallery/02-legacy', component: Template02Component },
    

    // dashboard routes
    { path: 'dashboard', component: DashboardHomeComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/resources', component: DashboardResourcesComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/builder', component: DashboardBuilderComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/gallery', component: DashboardGalleryComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/account', component: DashboardAccountComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/builder-edit', component: DashboardBuilderEditComponent, canActivate: [AuthGuard] },

    // 404
    {path: '404', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/404'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);