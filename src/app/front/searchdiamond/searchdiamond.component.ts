import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchdiamond',
  templateUrl: './searchdiamond.component.html',
  styleUrls: ['./searchdiamond.component.css']
})
export class SearchdiamondComponent implements OnInit {

  allSelected = false;
  colors = [
    {name:"D",state:false},
    {name:"E",state:false},
    {name:"F",state:false},
    {name:"G",state:false},
    {name:"H",state:false},
    {name:"I",state:false},
    {name:"J",state:false},
    {name:"K",state:false},
    {name:"L",state:false},
    {name:"M",state:false},
    {name:"N",state:false},
    {name:"O",state:false},
    {name:"P",state:false},
    {name:"Q",state:false},
    {name:"R",state:false},
    {name:"S",state:false},
    {name:"T",state:false},
    {name:"U",state:false},
    {name:"V",state:false},
    {name:"W",state:false},
    {name:"X",state:false},
    {name:"Y",state:false},
    {name:"Z",state:false}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  checkAll(bool){
    this.colors = this.colors.map((color)=>{
      return {name:color.name,state:bool}
    })
  }

}
