import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

 private baseURL='http://localhost:9090/'
  constructor(private httpClient:HttpClient) { }

  public findALL(): Observable<any>{
    return this.httpClient.get(this.baseURL+"document");
   }
   public findOne(id:number): Observable<any>{
   return this.httpClient.get(this.baseURL+"document/"+id);
   }
 
   public chercherDocParAffaire(codeaff:any): Observable<any> {
   return this.httpClient.get(this.baseURL+"chercherDocParAffaire/"+codeaff);
 }
     
 public findIfArchiveFalse(nonArchive:string): Observable<any>{
   return this.httpClient.get(this.baseURL+"docNonArchive/"+nonArchive);
 }
 public save(document:any): Observable<any>{
   return this.httpClient.post(this.baseURL+"document",document);
 }
 public delete(id:number): Observable<any>{
   return this.httpClient.delete(this.baseURL+"document/"+id);
 }
 public MiseAJour(id:number,document:any): Observable<any>{
   return this.httpClient.put(this.baseURL+"document/"+id,document);
 }
}
