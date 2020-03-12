import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-stonedetail',
  templateUrl: './stonedetail.component.html',
  styleUrls: ['/node_modules/bootstrap3/dist/css/bootstrap.min.css','./stonedetail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StonedetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript();
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
