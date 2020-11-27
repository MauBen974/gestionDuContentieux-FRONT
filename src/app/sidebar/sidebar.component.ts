import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'app/model/utilisateur';
import { UtilisateurService } from 'app/service/utilisateur.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

//CODE DE BASE-------------------------------------------------------
/*
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
  { path: '/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
  { path: '/table', title: 'Table List',  icon:'pe-7s-note2', class: '' },
  { path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
  { path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
  { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
  { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
  { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];
*/

//PRIVATE ROUTING----------------------------------------------------
export const ROUTES: RouteInfo[] = [
    { path: '/register', title: 'Inscritpion',  icon:'pe-7s-add-user', class: '' },
    { path: '/login', title: 'Connection',  icon:'pe-7s-door-lock', class: '' },

  ];

export const ROUTESLogged: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
  { path: '/utilisateur', title: 'Profil Utilisateur',  icon:'pe-7s-user', class: '' },
  { path: '/affaire', title: 'Affaires',  icon:'pe-7s-notebook', class: '' },
  { path: '/document', title: 'Documents',  icon:'pe-7s-note2', class: '' },
  { path: '/tache', title: 'Taches',  icon:'pe-7s-note2', class: '' },
  { path: '/tribunal', title: 'Tribunaux',  icon:'pe-7s-culture', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit {
  menuItems: any[];
  utilisateur:Utilisateur=new Utilisateur;
  adminOrnot:boolean;

  constructor(
    private router : Router,
    private utilisateurService : UtilisateurService
  ) { }

  ngOnInit() {
    this.utilisateurService.findById(parseInt(localStorage.getItem('id'))).subscribe(data => {
      this.utilisateur = data;
      if (this.utilisateur!=null) {
        this.menuItems = ROUTESLogged.filter(menuItem => menuItem);
      }
      else {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
      }
    })
  }

  //CODE DE BASE-----------------------------------------------------
  /* 
  ngOnInit(){
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  */

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

}
