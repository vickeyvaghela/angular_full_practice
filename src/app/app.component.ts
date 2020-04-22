import { Component } from '@angular/core';
// import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'narolagems';
  onActivate(e){
    console.log('hash');
  }
  constructor() {
    // this.wowService.init();
  }

}
