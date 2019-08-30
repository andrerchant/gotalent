import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor() { }

  @Input("menuStatus") isMenuOpen : boolean = false;

  ngOnInit() {
  }

}
