import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

  private baseURL = 'http://localhost:9090/phases'
  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public findOne(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public save(phase: any): Observable<any> {
    return this.httpClient.post(this.baseURL, phase);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }
  public update(id: number, phase: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, phase);
  }

  public getAllNotTermined(): Observable<any> {
    return this.httpClient.get(this.baseURL + "termined");
  }

  public findByTache(tache: any): Observable<any> {
    return this.httpClient.post(this.baseURL + "/getByTache", tache);
  }

  public updateLibelle(id: number, phase: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "Libelle/" + id, phase);
  }
}
