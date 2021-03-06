import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/model/utilisateur';
import { UtilisateurService } from 'app/service/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  utilisateur:Utilisateur=new Utilisateur;

  constructor(
    private utilisateurService : UtilisateurService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  //SAVE
  save(){
    this.utilisateur.role="user";
    this.utilisateurService.save(this.utilisateur).subscribe(u=>{});
    this.router.navigate(['login']);
  }

}
