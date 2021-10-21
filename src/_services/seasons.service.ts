import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {

  httpApi = `${environment.connectToServer()}seasons`;
  rapidHost = `${environment.rapidHost}`;
  rapidKey = `${environment.rapidKey}`

  constructor(private http:HttpClient) { }

  getSeasons(): Observable<any> {
    const headers = new HttpHeaders()
    .set("x-rapidapi-host", this.rapidHost)
    .set("x-rapidapi-key", this.rapidKey)
    return this.http.get(this.httpApi, { headers: headers })
  }
}
