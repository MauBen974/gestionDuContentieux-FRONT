import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private baseURL = 'http://localhost:9090/taches'
  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public findOne(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public save(tache: any): Observable<any> {
    return this.httpClient.post(this.baseURL, tache);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }
  public update(id: number, phase: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, phase);
  }

  public findBylibellePhase(libellePhase: String): Observable<any> {
    return this.httpClient.get(this.baseURL + "Libelle/" + libellePhase);
  }

  public findByStatusAudience(statusAudience: Boolean): Observable<any> {
    return this.httpClient.get(this.baseURL + "Audience/" + statusAudience);
  }

  public findByIdUtilisateur(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "Utilisateur/" + id);
  }

  public findByIdTribunal(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "Tribunal/" + id);
  }


}
