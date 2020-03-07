import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core'
import {Router} from "@angular/router"


@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['/node_modules/bootstrap3/dist/css/bootstrap.min.css','./common.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class CommonComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.loadScript();
  }

  logout(){
    localStorage.removeItem("access_token");
    window.location.href = window.location.origin;
  }
  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');

    script.innerHTML = '';
    script.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
}
