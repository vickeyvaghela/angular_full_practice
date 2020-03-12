import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { AuthService } from './auth.service';
//import { AuthGuard } from './auth.guard';
import { AuthGuard } from './front/services/auth.guard';
//import { AuthService } from './front/services/auth.service'


import { HomeComponent } from './front/home/home.component';
import { UserpanelComponent } from './front/userpanel/userpanel.component';
import { SearchdiamondComponent } from './front/searchdiamond/searchdiamond.component';
import { StonedetailComponent } from './front/stonedetail/stonedetail.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: HomeComponent },
  // { path: 'UserPanel', component: UserpanelComponent, canActivate: [AuthGuard] },
  { path: 'UserPanel', component: UserpanelComponent },
  { path: 'searchdiamond', component: SearchdiamondComponent },
  { path: 'stonedetail', component: StonedetailComponent },
];
// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'UserPanel', component: UserpanelComponent, canActivate: [AuthGuard] },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
