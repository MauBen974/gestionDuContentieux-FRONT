import { Component, OnInit } from '@angular/core';
import { Affaire } from 'app/model/affaire';
import { Document } from 'app/model/document';
import { AffaireService } from 'app/service/affaire.service';

@Component({
  selector: 'app-edit-affaire',
  templateUrl: './edit-affaire.component.html',
  styleUrls: ['./edit-affaire.component.css']
})
export class EditAffaireComponent implements OnInit {
  affaires:Affaire[];
  affaire:Affaire=new Affaire();
  document:Document=new Document();
  constructor(private affaireService : AffaireService) { }

  ngOnInit(): void {
  }

  findAll(){
    this.affaireService.findALL().subscribe(data=>{this.affaires=data});
  }

  MiseAJour(id:number,affaire){
    this.affaireService.MiseAJour(affaire,id).subscribe(()=>{this.findAll()});
 }
}
