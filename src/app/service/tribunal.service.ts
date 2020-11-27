import { Tribunal } from './../model/tribunal';
import { observable, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TribunalService {

  private baseUrl = "http://localhost:9090/"

  constructor(private httpClient: HttpClient) { }

  public findAllTribunalNotArchive(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "tribunalNotArchive")
  }

  public findAllTribunal(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "tribunal")
  }

  public findAllTribunalArchive(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "tribunalArchive")
  }

  public findTachesByTribunal(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl + "tribunalTaches/" + id)
  }

  public findOneTribunal(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl + "tribunal/" + id)
  }

  public saveOrUpdateTribunal(tribunal: Tribunal): Observable<any> {
    return this.httpClient.post(this.baseUrl + "tribunal/", tribunal)
  }

  public deleteTribunal(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "tribunal/" + id)
  }

	public setArchiveTrue(id : number): Observable<any> {
		return this.httpClient.post(this.baseUrl + "tribunal/" + id, null)
	}

}
