import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'recuperar-senha',
    loadComponent: () => import('./components/request-reset-password/request-reset-password.component').then(m => m.RequestResetPasswordComponent)
  },
  {
    path: 'nova-senha',
    loadComponent: () => import('./components/password-recovery/password-recovery.component').then(m => m.PasswordRecoveryComponent)
  },
  {
    path: 'abrigos',
    loadComponent: () => import('./components/abrigo/abrigo.component').then(m => m.AbrigoComponent)
  },
  {
    path: 'cadastrar-abrigo',
    loadComponent: () => import('./components/abrigo/components/create-shelter/create-shelter.component').then(m => m.CreateShelterComponent),
    canActivate: [authGuard]
  },
  {
    path: 'editar-abrigo/:id',
    loadComponent: () => import('./components/abrigo/components/edit-shelter/edit-shelter.component').then(m => m.EditShelterComponent),
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
