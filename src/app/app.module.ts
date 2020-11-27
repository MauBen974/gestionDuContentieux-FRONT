import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
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
import { DocumentComponent } from './document/document.component';
import { AffaireComponent } from './affaire/affaire.component';


import { DocumentService } from './service/document.service';
import {AffaireService } from './service/affaire.service';
import { EditAffaireComponent } from './affaire/edit-affaire/edit-affaire.component';
import { EditDocumentComponent } from './document/edit-document/edit-document.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
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
    DocumentComponent,
    EditAffaireComponent,
    EditDocumentComponent

   ],
  providers: [DocumentService,AffaireService,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
