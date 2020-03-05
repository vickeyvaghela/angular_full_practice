import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {catchError} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class UserpanelService {

  // private apiBaseUrl = 'http://localhost:3000/api';  // URL to web api
  private apiBaseUrl = 'http://127.0.0.1:3000';  // URL to web api
  constructor(private http: HttpClient) { }

  newstones(userData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/UserPanel/newstones',userData);
  }

  myOrders(userData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/UserPanel/myOrders',userData);
  }

  savedsearch(userData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/UserPanel/savedsearch',userData);
  }

  getCount(userData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/UserPanel/getCount',userData);
  }


}
