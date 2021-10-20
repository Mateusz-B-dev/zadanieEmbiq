import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CircuitsService {

  httpApi = `${environment.connectToServer()}circuits`;

  constructor(private http: HttpClient) { }

  getCircuits(): Observable<any> {
    let headers = new HttpHeaders()
    headers = headers.set('x-rapidapi-host', 'api-formula-1.p.rapidapi.com');
    headers = headers.set('x-rapidapi-key', 'f3ba240e7amsh666ebc124f6de2ep1f18c8jsn4f88d5230338');
    return this.http.request('GET', 'https://api-formula-1.p.rapidapi.com/circuits', { headers })
  }

  getCircuitsById(id: number): Observable<any> {
    return this.http.get(this.httpApi);
  }
}
