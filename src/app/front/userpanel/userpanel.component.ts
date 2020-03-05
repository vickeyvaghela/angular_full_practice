import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { UserpanelService } from '../services/userpanel.service'
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {


  public newStones: number;
  public myOrders = [];
  public savedsearches = [];

  constructor(private userPanelServ: UserpanelService) { }

  ngOnInit(): void {
    // $('body').removeClass('modal-open');
    // $('.modal-backdrop').remove();
    this.initialize();
  }


  initialize() {

    var UserId = 'nik-Peacock';
    var StatusType = 'S_India';
    this.userPanelServ.myOrders({UserId:UserId,StatusType:StatusType}).subscribe(
      orders => {
        if(orders && orders.success && orders.data){
          this.myOrders = orders.data;
        }else{
          this.myOrders = [];
        }
      },
      error => {
        console.log(error);
      }
    );


    UserId = 'nik';
    this.userPanelServ.savedsearch({UserId:UserId}).subscribe(
      savedsearch => {
        if(savedsearch && savedsearch.success && savedsearch.data){
          this.savedsearches = savedsearch.data;
        }else{
          this.myOrders = [];
        }
      },
      error => {
        console.log(error);
      }
    );


    UserId = 'nik';
    this.userPanelServ.newstones({UserId:UserId,PAGENAME:'NewArrivals.aspx'}).subscribe(
      savedsearch => {
        if(savedsearch && savedsearch.success && savedsearch.data){
          this.newStones = savedsearch.data;
        }else{
          this.newStones = 0;
        }
      },
      error => {
        console.log(error);
      }
    );

  }

}
