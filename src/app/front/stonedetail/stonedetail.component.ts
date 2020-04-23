import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Searchdiamond } from '../services/searchdiamond.service'
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-stonedetail',
  templateUrl: './stonedetail.component.html',
  styleUrls: ['/node_modules/bootstrap3/dist/css/bootstrap.min.css','./stonedetail.component.css']
  // styleUrls: ['./stonedetail.component.css']
})
export class StonedetailComponent implements OnInit {





  pid: string;
  stoneDetail: any = {};
  disPlay = 'image';
  email = 'vickeyvaghela82@gmail.com';
  attachUrl = '';


  constructor(private actRoute: ActivatedRoute,private searchDiamondServ: Searchdiamond,private sanitizer: DomSanitizer) { }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {


    this.actRoute.paramMap.subscribe(params => {
      this.pid = params.get('pid');
      console.log(this.pid);


      this.searchDiamondServ.getStoneDetail({pid:this.pid}).subscribe(stoneDetaisObj => {
        console.log('stoneDetaisObj ');
        console.log(stoneDetaisObj);
        if(stoneDetaisObj && stoneDetaisObj.data){
          this.stoneDetail = stoneDetaisObj.data;
          this.attachUrl = this.stoneDetail.PhotoPath

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

  sendEmail(){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)){


      var ext = this.attachUrl.substr(this.attachUrl.lastIndexOf('.') + 1);


      this.searchDiamondServ.mailStoneDetail({email:this.email,url:this.attachUrl,data:this.stoneDetail,ext:ext}).subscribe(mailApiResp => {
        console.log('mailApiResp ');
        console.log(mailApiResp);
        Swal.fire({
          icon: 'success',
          title: 'Email has been sent successfully!',
          showConfirmButton: false,
          timer: 2500
        })

      },errStoneDetailRes => {console.log('errStoneDetailRes ',errStoneDetailRes);});

    }else{
      //alert('Please enter valid email id ');
      Swal.fire({
        icon: 'warning',
        title: 'Please enter a valid email id',
        showConfirmButton: false,
        timer: 2500
      })

    }
    console.log('send email with '+this.disPlay);
    console.log('email val '+this.email);
  }

  downloadDetailDoc(){
    //http://localhost:3000/front/SearchDiamond/pdf
    var mapForm = document.createElement("form");
    //mapForm.target = "_blank";
    mapForm.method = "POST"; // or "post" if appropriate
    mapForm.action = 'http://localhost:3000/front/SearchDiamond/downloadDetailDoc';

    let obj = {
      url:this.attachUrl,
      ext:this.attachUrl.substr(this.attachUrl.lastIndexOf('.') + 1).toUpperCase()
    }


    Object.keys(obj).forEach(function(param){
      if(obj[param]){
        var mapInput = document.createElement("input");
        mapInput.type = "hidden";
        mapInput.name = param;
        mapInput.setAttribute("value", obj[param]);
        mapForm.appendChild(mapInput);
      }
    });
    document.body.appendChild(mapForm);
    mapForm.submit();

  }

}
