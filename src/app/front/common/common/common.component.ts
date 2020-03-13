import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
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
  }

  @Output() globalSearchEmitter = new EventEmitter<any>();

  globalSearchBox = null;


  searchByStoneId(){
    this.globalSearchEmitter.emit(this.globalSearchBox);
  }

  logout(){
    localStorage.removeItem("access_token");
    window.location.href = window.location.origin;
  }
}
