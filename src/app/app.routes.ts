import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateBuilderComponent } from './template-builder/template-builder.component';
import {DashboardResourcesComponent} from './dashboard-resources/dashboard-resources.component';
import {DashboardBuilderComponent} from './dashboard-builder/dashboard-builder.component';
import {DashboardGalleryComponent} from './dashboard-gallery/dashboard-gallery.component';
import {DashboardAccountComponent} from './dashboard-account/dashboard-account.component';

// import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { AuthGuard } from './core/auth.guard';


export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/resources', component: DashboardResourcesComponent },
    { path: 'dashboard/builder', component: DashboardBuilderComponent },
    { path: 'dashboard/gallery', component: DashboardGalleryComponent },
    { path: 'dashboard/account', component: DashboardAccountComponent },
    
    { path: 'template-builder', component: TemplateBuilderComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent }
    // { path: 'members', component: OtherComponent, canActivate: [AuthGuard] }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);