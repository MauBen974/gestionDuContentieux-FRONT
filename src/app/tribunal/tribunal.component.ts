import { UtilisateurService } from 'app/service/utilisateur.service';
import { Utilisateur } from './../model/utilisateur';
import { TribunalService } from './../service/tribunal.service';
import { Tribunal } from './../model/tribunal';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-tribunal',
  templateUrl: './tribunal.component.html',
  styleUrls: ['./tribunal.component.scss']
})
export class TribunalComponent implements OnInit {

  utilisateur: Utilisateur = new Utilisateur();
  tribunal: Tribunal = new Tribunal();
  tribunals: Tribunal[];
  tribunalsArchive: Tribunal[];
  affichageTribunalArchive = false;

  constructor(
    private tribunalService: TribunalService,
    private utilisateurService: UtilisateurService) {
  }

  ngOnInit(): void {
    this.findUtilisateurConnecte();
    this.findAllTribunalNotArchive();
  }

  desactiveAffichageTribunalArchive() {
    this.affichageTribunalArchive = false
  }

  findUtilisateurConnecte() {
    this.utilisateurService.findById(parseInt(localStorage.getItem('id'))).subscribe(data => {
      this.utilisateur = data;
    });
  }

  findAllTribunalNotArchive() {
    this.tribunalService.findAllTribunalNotArchive().subscribe(data => {
      this.tribunals = data;
    });
  }

  getOneTribunal(id: number) {
    this.tribunalService.findOneTribunal(id).subscribe(t => {
      this.tribunal = t;
    })
  }

  findAllArchiveTribunal() {
    this.affichageTribunalArchive = true;
    this.tribunalService.findAllTribunalArchive().subscribe(data => {
      this.tribunalsArchive = data;
    })
  }

  save(): void {
    this.tribunalService.saveOrUpdateTribunal(this.tribunal).subscribe(t => {
      this.tribunal = new Tribunal();
      this.findAllTribunalNotArchive();
    });
  }

  archiveTribunal(id: number) {
    this.tribunalService.setArchiveTrue(id).subscribe(t => {
      this.findAllTribunalNotArchive();
    })
  }

  activeTribunal(): void {
    this.tribunalService.saveOrUpdateTribunal(this.tribunal).subscribe(t => {
      this.tribunal = new Tribunal();
      this.findAllArchiveTribunal();
      this.findAllTribunalNotArchive();
    });
  }

  deleteTribunal(id: number) {
    this.tribunalService.deleteTribunal(id).subscribe(t => {
      this.findAllArchiveTribunal();
    })
  }

}
