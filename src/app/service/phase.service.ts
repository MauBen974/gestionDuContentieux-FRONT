import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

  private baseURL = 'http://localhost:9090'
  constructor(private httpClient: HttpClient) { }
}
