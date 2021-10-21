import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  httpApi = `${environment.connectToServer()}races`;
  rapidHost = `${environment.rapidHost}`;
  rapidKey = `${environment.rapidKey}`

  constructor(private http: HttpClient) { }

  getRaces(season: number, competition: number): Observable<any> {
    const headers = new HttpHeaders()
    .set("x-rapidapi-host", this.rapidHost)
    .set("x-rapidapi-key", this.rapidKey)
    return this.http.get(this.httpApi + '?competition=' + `${competition}` + '&season=' + `${season}`, { headers: headers })
  }

}
