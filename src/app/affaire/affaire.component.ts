import { Component, OnInit } from '@angular/core';
import { Affaire } from 'app/model/affaire';
import { Document } from 'app/model/document';
import { AffaireService } from 'app/service/affaire.service';

@Component({
  selector: 'app-affaire',
  templateUrl: './affaire.component.html',
  styleUrls: ['./affaire.component.css']
})
export class AffaireComponent implements OnInit {

  affaires:Affaire[];
  affaire:Affaire=new Affaire();
  id:number=Affaire[0];
  document:Document=new Document();
  quelstatus:string;
  affairesParStatus:Affaire[];
  affairesParId:Affaire[];
  constructor(private affaireService : AffaireService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.affaireService.findALL().subscribe(data=>{this.affaires=data});
  }

  findOne(id:number){
     this.affaireService.findOne(this.id).subscribe(data=>{this.affairesParId=data});
    }

  findByStatus(quelstatus:string){
    this.affaireService.findByStatus(this.quelstatus).subscribe(data=>{this.affairesParStatus=data});
    }

  save(){
    this.affaireService.save(this.affaire).subscribe(()=>{this.findAll();this.affaire = new Affaire();})
  }

  MiseAJour(id:number,affaire){
     this.affaireService.MiseAJour(affaire,id).subscribe(()=>{this.findAll()});
  }

  delete(affaire){
    this.affaireService.delete(affaire.idAffaire).subscribe(()=>{this.findAll()});
  }
}
