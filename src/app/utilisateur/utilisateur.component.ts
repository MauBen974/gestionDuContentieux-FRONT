import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/model/utilisateur';
import { UtilisateurService } from 'app/service/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  utilisateur:Utilisateur=new Utilisateur;
  utilisateurs:Utilisateur[];
  constructor(private utilisateurService : UtilisateurService) { }

  ngOnInit() {
  }

  //FIND ALL
  findAll() {
    this.utilisateurService.findAll().subscribe(data=>{this.utilisateurs=data});
  }
  findAllArchiveFalse() {
    this.utilisateurService.findAllArchiveFalse().subscribe(data=>{this.utilisateurs=data});
  }

  //FIND BY ID
  selectOne(item): void {
    this.utilisateur = item;
    console.log(this.utilisateur);
  }
  /*
  findById(utilisateur){
    this.utilisateurService.findById(utilisateur.idUtilisateur).subscribe(data=>{this.utilisateur=data});
  }
  findOneIfArchiveFalse(utilisateur){
    this.utilisateurService.findOneIfArchiveFalse(utilisateur.idUtilisateur).subscribe(data=>{this.utilisateur=data});
  }
  */
  //SAVE
  save(){
    this.utilisateurService.save(this.utilisateur).subscribe(()=>{
      this.findAll;
      this.utilisateur = new Utilisateur();
    })
  }
  archiveUtilisateur(utilisateur){
    this.utilisateurService.archiveUtilisateur(utilisateur.idUtilisateur).subscribe(data=>{this.utilisateur=data});
  }

  //DELETE
  delete(utilisateur) {
    this.utilisateurService.delete(utilisateur.idUtilisateur).subscribe(()=>this.findAll);
  }

}
