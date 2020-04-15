import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import {catchError} from "rxjs/internal/operators";
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class Searchdiamond {

  // private apiBaseUrl = 'http://localhost:3000/api';  // URL to web api
  private apiBaseUrl = 'http://127.0.0.1:3000';  // URL to web api
  constructor(private http: HttpClient, private datePipe: DatePipe) { }

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

  saveSearch(postData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/saveSearch',postData);
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
  mailStoneDetail(postData): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/mailStoneDetail',postData);
  }

  addToBasket(postData): Observable<any> {

    //return this.http.get("http://api.ipify.org/?format=json");
    // this.http.get<any>('http://api.ipify.org/?format=json').subscribe(externalUrlRes => {
    //   console.log('externalUrlRes ',externalUrlRes);
    //
    // },errorExternal => {
    //   console.log('errorExternal ',errorExternal);
    // });
    // this.http.get("http://api.ipify.org/?format=json").subscribe(data => {
    //   console.log('data');
    //   let CallsAry = postData.PIdArys.map(item => this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/addToBasket',{PId:item,ip:data}))
    //   return forkJoin(CallsAry);
    // })
    console.log('dateeeeee    ',this.datePipe.transform(new Date(), 'MM-dd-yyyy'));
    console.log('time    ',this.datePipe.transform(new Date(), 'hh:mm:ss'));


    return this.http.get("http://api.ipify.org/?format=json")
        .pipe(mergeMap(ipAdd => {



          let CallsAry = postData.PIdArys.map(item => this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/addToBasket',{PId:item,ip:ipAdd,date:this.datePipe.transform(new Date(), 'MM-dd-yyyy'),time:this.datePipe.transform(new Date(), 'hh:mm:ss')}))
          return forkJoin(CallsAry);
        }));



    // this.http.get("http://api.ipify.org/?format=json").subscribe(ipRes => {
    //   // console.log('ipres');
    //   // console.log(ipRes);
    //
    //
    //   let CallsAry = postData.PIdArys.map(item => this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/addToBasket',{PId:item,ip:ipRes}))
    //   return forkJoin(CallsAry);
    //
    //
    // },error => {
    //   console.log(error);
    //   let CallsAry = postData.PIdArys.map(item => this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/addToBasket',{PId:item,ip:{}}))
    //   return forkJoin(CallsAry);
    //
    // });


    //this.http.get("http://api.ipify.org/?format=json")




  }


  // testVikesh(postData): Observable<any> {
  //   return this.http.post<any>(this.apiBaseUrl+'/front/SearchDiamond/testVikesh',postData);
  // }


}
