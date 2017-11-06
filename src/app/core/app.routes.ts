import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './../app.component';

// public
import { LoginComponent } from './../public/login/login.component';
import { HomeComponent } from './../public/home/home.component';
import { SignupComponent } from './../public/signup/signup.component';
import { SignupThanksComponent } from './../public/signup-thanks/signup-thanks.component';

// core
import { AuthGuard } from './auth.guard';

// dashboard
import { DashboardHomeComponent } from './../dashboard/dashboard-home/dashboard-home.component';
import {DashboardResourcesComponent} from './../dashboard/dashboard-resources/dashboard-resources.component';
import {DashboardBuilderComponent} from './../dashboard/dashboard-builder/dashboard-builder.component';
import {DashboardGalleryComponent} from './../dashboard/dashboard-gallery/dashboard-gallery.component';
import {DashboardAccountComponent} from './../dashboard/dashboard-account/dashboard-account.component';
import {DashboardBuilderEditComponent} from './../dashboard/builder-edit/builder-edit.component';


export const router: Routes = [
    // public routes
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signup-thanks', component: SignupThanksComponent },
    
    // dashboard routes
    { path: 'dashboard', component: DashboardHomeComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/resources', component: DashboardResourcesComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/builder', component: DashboardBuilderComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/gallery', component: DashboardGalleryComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/account', component: DashboardAccountComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/builder-edit', component: DashboardBuilderEditComponent, canActivate: [AuthGuard] }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);