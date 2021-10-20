import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {

  httpApi = `${environment.connectToServer()}seasons`;

  constructor(private http:HttpClient) { }

  getSeasons(): Observable<any> {
    return this.http.get(this.httpApi);
  }
}
