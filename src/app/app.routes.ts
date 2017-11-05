import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateBuilderComponent } from './template-builder/template-builder.component';
// dashboard components
import {DashboardResourcesComponent} from './dashboard-resources/dashboard-resources.component';
import {DashboardBuilderComponent} from './dashboard-builder/dashboard-builder.component';
import {DashboardGalleryComponent} from './dashboard-gallery/dashboard-gallery.component';
import {DashboardAccountComponent} from './dashboard-account/dashboard-account.component';

import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { AuthGuard } from './core/auth.guard';

export const router: Routes = [
    // public routes
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    // dashboard routes
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/resources', component: DashboardResourcesComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/builder', component: DashboardBuilderComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/gallery', component: DashboardGalleryComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/account', component: DashboardAccountComponent, canActivate: [AuthGuard] },
    // garbage routes
    { path: 'template-builder', component: TemplateBuilderComponent, canActivate: [AuthGuard] },
    { path: 'login-email', component: EmailComponent }
    // ,

    // { path: 'gallery/01-launchpad', component: EmailComponent },
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);