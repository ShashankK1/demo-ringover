import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor() { }

  counter(i: number) {
    return new Array(i);
  }

  shoesDescription = [
    {cost:2000,color:'#ff0000',design:2,type:1,fullstars:2,halfstars:1,nostar:2,name:'KSL 01'},
    {cost:3000,color:'#ff0000',design:2,type:2,fullstars:3,halfstars:1,nostar:1,name:'KSL 02'},
    {cost:4000,color:'#ff0000',design:3,type:1,fullstars:4,halfstars:1,nostar:0,name:'KSL 03'},
    {cost:5000,color:'#ff0000',design:3,type:1,fullstars:3,halfstars:1,nostar:1,name:'KSL 04'},
    {cost:6000,color:'#ff0000',design:4,type:1,fullstars:3,halfstars:0,nostar:2,name:'KSL 05'},
    {cost:7005,color:'#ff0000',design:4,type:2,fullstars:4,halfstars:0,nostar:1,name:'KSL 06'}
  ]

  cart = new Map();
  
  ngOnInit(): void {
  }

  filter(e:any){
    return this.designFilter(e)||this.typeFilter(e);
  }

  // checkFirst(e:any){
  //   console.log(e.target.checked);
  // }

  
  designArr = [0,0,0];
  typeArr = [0,0];
  check1(e:any,v:number){
    if(e.target.checked){
      this.designArr[v-1] = 1;
    }
    else{
      this.designArr[v-1] = 0;
    }
  }
  check2(e:any,v:number){
    if(e.target.checked){
      this.typeArr[v-1] = 1;
    }
    else{
      this.typeArr[v-1] = 0;

    }
  }
  designFilter(e:any){
    for(let i=0;i<3;i++){
      if(this.designArr[i]>0 && (i+2)===e.design){
        return true;
      }
    }
    return false;
  }
  typeFilter(e:any){
    for(let i=0;i<2;i++){
      if(this.typeArr[i]>0 && (i+1) === e.type){
        return true;
      }
    }
    return false;
  }
  defaultFilter:boolean = true;
  process(){
    this.defaultFilter=false;
  }

  cartActive:boolean = false;
  addToCart(e:any){
    this.cartActive = true;
    if(!this.cart.has(e.name)){

      this.cart.set(e.name,1);
    }
    else{
      if(this.cart.get(e.name) !== undefined){
        let count = this.cart.get(e.name)+1;
        this.cart.set(e.name,count);
      }
      
    }
  }

}
