import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  httpApi = `${environment.connectToServer()}drivers`;

  constructor(private http:HttpClient) { }

  getDrivers(): Observable<any> {
    return this.http.get(this.httpApi);
  }

  getDriverById(id: number): Observable<any> {
    return this.http.get(this.httpApi);
  }

}
