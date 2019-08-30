import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() { }

  toggleMenu:boolean = false;

  switchMenu(){
    this.toggleMenu = !this.toggleMenu;
  }

  ngOnInit() {
  }

}
