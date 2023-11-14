import { Routes, provideRouter, withDebugTracing } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ApplicationConfig } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { KartComponent } from './kart/kart.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', title: 'Shopy - Accueil', component: HomeComponent },
  { path: 'login', title: 'Shopy - Connexion', component: LoginPageComponent },
  {
    path: 'register',
    title: 'Shopy - Inscription',
    component: RegisterPageComponent,
  },
  { path: 'profile', title: 'Shopy - Profil', component: ProfileComponent },
  {
    path: 'profile-settings',
    title: 'Shopy - Paramètres',
    component: ProfileSettingsComponent,
  },
  { path: 'kart', title: 'Shopy - Panier', component: KartComponent },
  { path: 'about', title: 'Shopy - A propos', component: AboutComponent },
  { path: '**', title: 'Shopy', component: ErrorPageComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withDebugTracing())],
};
