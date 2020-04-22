import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {Router} from "@angular/router"
import { ViewEncapsulation } from '@angular/core'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['/node_modules/bootstrap/dist/css/bootstrap.min.css','./home.component.css'],
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  myform: FormGroup;
  submitted = false;
  invalidCred = false;

  constructor(private router: Router) { }

  public resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
  ngOnInit(): void {
    this.loadScript();
    this.myform = new FormGroup({
      'username': new FormControl('vikesh', [Validators.required]),
      'password': new FormControl('1234', [Validators.required])
    });
  }

  get username() { return this.myform.get('username'); }
  get password() { return this.myform.get('password'); }

  onSubmit() {
    this.submitted = true;


  }

  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');

    script.innerHTML = '';
    script.src = 'assets/js/bootstrap.min.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
}
