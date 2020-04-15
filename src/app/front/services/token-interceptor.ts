import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // if(localStorage.getItem("access_token")){
    //   headers = { 'Content-Type': 'application/json',"Authorization":"Bearer " + localStorage.getItem("access_token")}
    // }else{
    //   headers = { 'Content-Type': 'application/json',"Authorization":"Bearer "}
    // }

    let newHeaders = req.headers;

    if(req.url == 'http://api.ipify.org/?format=json'){
      const authReq = req.clone({headers: newHeaders});
      return next.handle(authReq);
    }else{
      newHeaders = newHeaders.append('Content-Type', 'application/json');

      const AccTkn = localStorage.getItem("access_token") ? "Bearer " + localStorage.getItem("access_token") : "Bearer ";

      newHeaders = newHeaders.append('Authorization', AccTkn);

      const authReq = req.clone({headers: newHeaders});
      return next.handle(authReq);
    }



  }
}
