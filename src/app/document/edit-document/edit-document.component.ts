import { Component, OnInit } from '@angular/core';
import { Document } from 'app/model/document';
import { DocumentService } from 'app/service/document.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css']
})
export class EditDocumentComponent implements OnInit {
  documents:Document[];
  document:Document=new Document();
  editform : FormGroup;
  constructor(private documentService : DocumentService,private formBuilder : FormBuilder, 
    private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.editform=this.formBuilder.group({
      id:[''],
      nom :['',Validators.required],
      dateCreation :['',Validators.required],
      description :['',Validators.required],
      archive :['',Validators.required]
    });
    
  const id = Number (this.route.snapshot.paramMap.get('id'));
    this.documentService.MiseAJour(id,document).subscribe(data=>{
      this.editform.setValue(data);
      console.log(id);
    }); 
  }

 MiseAJour(id:number,document){
  console.log(this.editform.value);
  this.documentService.MiseAJour(this.editform.value,id).subscribe(()=>{
  this.router.navigate(['/document'])

  });
}
}
