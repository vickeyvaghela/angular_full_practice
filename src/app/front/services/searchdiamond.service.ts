import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {catchError} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class Searchdiamond {

  // private apiBaseUrl = 'http://localhost:3000/api';  // URL to web api
  private apiBaseUrl = 'http://127.0.0.1:3000';  // URL to web api
  constructor(private http: HttpClient) { }

  getLocations(userData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/getLocations',userData);
  }


  fancyintensity(userData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/fancyintensity',userData);
  }

  fancyovertone(userData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/fancyovertone',userData);
  }

  fancycolor(userData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/fancycolor',userData);
  }




  getOrigins(userData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/getOrigins',userData);
  }

  searchDiamond(userData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/searchDiamond',userData);
  }

  mailXLS(userData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/mailXLS',userData);
  }

  getResultCount(userData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/getResultCount',userData);
  }

  getShade(userData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/getShade',userData);
  }

  getHNAMst(userData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/getHNAMst',userData);
  }
  getLUSTMst(userData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/getLUSTMst',userData);
  }




}
