import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/model/utilisateur';
import { UtilisateurService } from 'app/service/utilisateur.service';
import { admin } from 'googleapis/build/src/apis/admin';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  utilisateur:Utilisateur=new Utilisateur;
  utilisateurs:Utilisateur[];
  adminOrnot:boolean;

  selectedFiles: FileList;
  currentFileUpload: File;

  constructor(private utilisateurService : UtilisateurService) { }

  ngOnInit() {
    /*
    this.utilisateurService.findById(parseInt(localStorage.getItem('id'))).subscribe(data => {
      this.utilisateur = data;
      if (this.utilisateur.role=="admin") {
        this.adminOrnot=true;
      }
      else {
        this.adminOrnot=false;
      }
    })
    */
    this.utilisateurService.findById(parseInt(localStorage.getItem('id'))).subscribe(data => {
    this.utilisateur = data;
    if (this.utilisateur.role=="admin") {
      this.adminOrnot=true;
    }
    else {
      this.adminOrnot=false;
    }
  })
    this.findAll();
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
      this.findAll();
      this.utilisateur = new Utilisateur();
    })
  }
  archiveUtilisateur(utilisateur){
    this.utilisateurService.archiveUtilisateur(utilisateur.idUtilisateur).subscribe(data=>{this.utilisateur=data});
    this.findAll();
  }

  //IMAGE
  selectFile(event){
    this.selectedFiles = event.target.files;
  }

  saveUserImage(){
    this.currentFileUpload = this.selectedFiles.item(0);
    this.utilisateurService.saveImage(this.currentFileUpload, this.utilisateur).subscribe(()=> {
      this.findAll();
      this.utilisateur = new Utilisateur();
      this.selectedFiles = undefined;
      }
    )
  }

  //DELETE
  delete(utilisateur) {
    this.utilisateurService.delete(utilisateur.idUtilisateur).subscribe(()=>this.findAll);
    this.findAll();
  }
}
