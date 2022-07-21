import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {

  constructor(
    private router:Router
  ) { }

  routeMap = new Map([
    ['home','selected'],
    ['journey','no'],
    ['team','no'],
    ['store','no'],
    ['contact','no']
  ]);

  ngOnInit(): void {

  }

  prevSelection:string = 'home';
  selectTabs(e:any){
    if(e!==this.prevSelection){
      this.routeMap.set(this.prevSelection,'no');
      this.prevSelection = e;
      this.routeMap.set(this.prevSelection,'selected');
      this.router.navigate([`${this.prevSelection}`]);
    }
    

  }

  ngOnDestroy(): void {
    this.router.navigate(['home']);
  }

}
