import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'app/model/utilisateur';
import { UtilisateurService } from 'app/service/utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  utilisateur: Utilisateur = new Utilisateur;

  constructor(
    private utilisateurService : UtilisateurService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  authentification() {
    this.utilisateurService.authentification(this.email, this.password).subscribe(data =>{
      this.utilisateur=data;
      if (this.utilisateur != null) {
        if (this.utilisateur.role == "admin") {
          //localStorage.setItem('role', 'admin');
          localStorage.setItem('utilisateur', JSON.stringify({email : this.utilisateur.email, role : this.utilisateur.role}));
          localStorage.setItem('id', this.utilisateur.idUtilisateur.toString());
        } else if(this.utilisateur.role != "admin") {
          //localStorage.setItem('role', 'user');
          localStorage.setItem('utilisateur', JSON.stringify({email : this.utilisateur.email, role : this.utilisateur.role}));
          localStorage.setItem('id', this.utilisateur.idUtilisateur.toString());
        }
      }
      this.router.navigate(['dashboard']);
    })
  }

}
