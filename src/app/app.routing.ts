import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AffaireComponent } from './affaire/affaire.component';
import { DocumentComponent } from './document/document.component';
import { TribunalComponent } from './tribunal/tribunal.component';
import { TacheComponent } from './tache/tache.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      },  
      {
        path: 'utilisateur',
        component: UtilisateurComponent
      },
      {
        path: 'affaire',
        component: AffaireComponent
      },
      {
        path: 'document',
        component: DocumentComponent
      },
      {
        path: 'tache',
        component: TacheComponent
      },
      {
        path: 'tribunal',
        component: TribunalComponent
      },
      {
      path: 'register',
      component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
