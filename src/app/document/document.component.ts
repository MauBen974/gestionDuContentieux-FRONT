import { Component, OnInit } from '@angular/core';
import { Document } from 'app/model/document';
import { DocumentService } from 'app/service/document.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  documents:Document[];
  document:Document=new Document();
  nonArchive:string;
  codeaff:any;
  id:number;
  documentsParArchive:Document[];
  documentsParId:Document[];
  documentsParAffaire:Document[];
  constructor(private documentService : DocumentService,private router:Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.documentService.findALL().subscribe(data=>{this.documents=data});
  }

  findOne(id:number){
     this.documentService.findOne(this.id).subscribe(data=>{this.documentsParId=data});
    }
  
  chercherDocParAffaire(codeaff){
    this.documentService.chercherDocParAffaire(this.codeaff).subscribe(data=>{this.documentsParAffaire=data});
  }
      
  findIfArchiveFalse(nonArchive:String){
    this.documentService.findIfArchiveFalse(this.nonArchive).subscribe(data=>{this.documentsParArchive=data});
  }

  save(){
    this.documentService.save(this.document).subscribe(()=>{this.findAll();this.document = new Document();})
  }

  MiseAJour(id:number,document){
     this.documentService.MiseAJour(document,id).subscribe(()=>{this.findAll()});
  }

  delete(document){
    this.documentService.delete(document.id).subscribe(()=>{this.findAll()});
  }
}
