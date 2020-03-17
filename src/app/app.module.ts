import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './front/services/auth.guard';
import { AuthService } from './front/services/auth.service'
import { TokenInterceptor } from './front/services/token-interceptor'

import { DatePipe } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './front/home/home.component';
import { UserpanelComponent } from './front/userpanel/userpanel.component';
import { CommonComponent } from './front/common/common/common.component';
import { SearchdiamondComponent } from './front/searchdiamond/searchdiamond.component';
import { StonedetailComponent } from './front/stonedetail/stonedetail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RecaptchaModule } from 'ng-recaptcha';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserpanelComponent,
    CommonComponent,
    SearchdiamondComponent,
    StonedetailComponent
  ],
  imports: [
    BrowserModule,
    RecaptchaModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['http://localhost:4200'],
        blacklistedRoutes: ['http://localhost:4200/login']
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [DatePipe,AuthGuard,AuthService,{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
