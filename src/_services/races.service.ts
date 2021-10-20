import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  httpApi = `${environment.connectToServer()}races`;

  constructor(private http: HttpClient) { }

  getRaces(): Observable<any> {
    return this.http.get(this.httpApi);
  }

  getRaceById(id: number): Observable<any> {
    return this.http.get(this.httpApi);
  }

  getRaceBySeason(season: number): Observable<any> {
    return this.http.get(this.httpApi);
  }

}
