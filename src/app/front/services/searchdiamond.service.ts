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

  getLocations(postData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/getLocations',postData);
  }


  fancyintensity(postData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/fancyintensity',postData);
  }

  fancyovertone(postData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/fancyovertone',postData);
  }

  fancycolor(postData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/fancycolor',postData);
  }




  getOrigins(postData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/getOrigins',postData);
  }

  searchDiamond(postData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/searchDiamond',postData);
  }

  mailXLS(postData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/mailXLS',postData);
  }

  getResultCount(postData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/getResultCount',postData);
  }

  getShade(postData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/getShade',postData);
  }

  getHNAMst(postData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/getHNAMst',postData);
  }
  getLUSTMst(postData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/getLUSTMst',postData);
  }


  getStoneDetail(postData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/getStoneDetail',postData);
  }


}
