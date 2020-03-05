import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {catchError} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private apiBaseUrl = 'http://localhost:3000/api';  // URL to web api
  private apiBaseUrl = 'http://127.0.0.1:3000';  // URL to web api
  constructor(private http: HttpClient) { }

  loginService(username,password): Observable<any> {

    //const headers = { 'Content-Type': 'application/json'}
    const body = { username: username, password:password }

    return this.http.post<any>(this.apiBaseUrl+'/front/authService/login',body).pipe(
      map(result => {
        if(result.token){
          localStorage.setItem('access_token', result.token);
          return true;
        }else{
          return false;
        }
      })
    );
  }

  /*userpanel(): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/UserPanel/getAll',{});
  }*/

}
