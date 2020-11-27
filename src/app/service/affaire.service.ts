import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffaireService {

  private baseURL='http://localhost:9096/'
  private baseURL1='http://localhost:9095/'
  constructor(private httpClient:HttpClient) { }

	public findALL(): Observable<any>{
    return this.httpClient.get(this.baseURL1+"affaire");
   }
   public findOne(id:number): Observable<any>{
   return this.httpClient.get(this.baseURL+"affaire/"+id);
   }
 public findByStatus(quelstatus:string): Observable<any>{
   return this.httpClient.get(this.baseURL+"affaireParStatus/"+quelstatus);
 }

 public save(affaire:any): Observable<any>{
   return this.httpClient.post(this.baseURL1+"affaire",affaire);
 }
 public delete(id:number): Observable<any>{
   return this.httpClient.delete(this.baseURL1+"affaire/"+id);
 }
 public MiseAJour(id:number,affaire:any): Observable<any>{
   return this.httpClient.put(this.baseURL+"affaire/"+id,affaire);
 }
}
