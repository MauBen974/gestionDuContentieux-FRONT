import { Injectable } from '@angular/core';
import { Utilisateur } from './../model/utilisateur';
import { HttpHeaders, HttpClient, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  baseURL = "http://localhost:9090/"

  constructor(private httpClient: HttpClient) { }

  //FIND ALL
  public findAll():Observable<any>{
    return this.httpClient.get(this.baseURL+"utilisateurs");
  }
  public findAllArchiveFalse():Observable<any>{
    return this.httpClient.get(this.baseURL+"utilisateurs-archives");
  }

  //FIND BY ID 
  public findById(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"utilisateurs-archives/"+id);
  }
  public findOneIfArchiveFalse(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"utilisateurs"+id);
  }

  //SAVE
  public save(utilisateur:any):Observable<any>{
    return this.httpClient.post(this.baseURL+"utilisateurs",utilisateur);
  }
  public saveImage(file: File, user: Utilisateur){
    const formData: FormData = new FormData();
    formData.append('nom', user.nom);
    formData.append('prenom', user.prenom);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('role', user.role);
    formData.append('file', user.file);
    const req = new HttpRequest('POST', this.baseURL+"utilisateurs-image", formData,
     {reportProgress:true, responseType:'text'});
    return this.httpClient.request(req);
  }
  public archiveUtilisateur(id:number):Observable<any>{
    return this.httpClient.post(this.baseURL+"utilisateurs/"+id,id);
  }

  //DELETE
  public delete(id:number):Observable<any> {
    return this.httpClient.delete(this.baseURL+"utilisateurs/"+id);
  }

  //Authentification
  public authentification(email:string,password:string):any {
    return this.httpClient.get(this.baseURL+"authentification?email="+email+"&&password="+password);
  }

}
