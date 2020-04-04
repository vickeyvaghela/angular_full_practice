import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Searchdiamond } from '../services/searchdiamond.service'


@Component({
  selector: 'app-stonedetail',
  templateUrl: './stonedetail.component.html',
  styleUrls: ['/node_modules/bootstrap3/dist/css/bootstrap.min.css','./stonedetail.component.css']
})
export class StonedetailComponent implements OnInit {
  pid: string;
  stoneDetail: any = {};


  constructor(private actRoute: ActivatedRoute,private searchDiamondServ: Searchdiamond) { }

  ngOnInit(): void {


    this.actRoute.paramMap.subscribe(params => {
      this.pid = params.get('pid');
      console.log(this.pid);

      this.searchDiamondServ.getStoneDetail({pid:this.pid}).subscribe(stoneDetaisObj => {
        console.log('stoneDetaisObj ');
        console.log(stoneDetaisObj);
        if(stoneDetaisObj && stoneDetaisObj.data){
          this.stoneDetail = stoneDetaisObj.data;
        }
      },errStoneDetailRes => {console.log('errStoneDetailRes ',errStoneDetailRes);});


    });

    this.loadScript();
  }
  public loadScript() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');

    script.innerHTML = '';
    script.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
}
