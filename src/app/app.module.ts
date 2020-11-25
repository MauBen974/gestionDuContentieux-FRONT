import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { TribunalComponent } from './tribunal/tribunal.component';
import { TacheComponent } from './tache/tache.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


import { DocumentService } from './service/document.service';
import {AffaireService } from './service/affaire.service';
import { AffaireComponent } from './affaire/affaire.component';
import { DocumentComponent } from './document/document.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule
  ],
  declarations: [						
    AppComponent,
    AdminLayoutComponent,
    UtilisateurComponent,
    TribunalComponent,
    TacheComponent,
    RegisterComponent,
    LoginComponent,
    AffaireComponent,
    DocumentComponent
   ],
  providers: [DocumentService,AffaireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
