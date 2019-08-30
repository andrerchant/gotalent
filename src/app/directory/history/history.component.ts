import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {

  constructor() {
  }
  numbers = Array(26).fill(1);

  ngOnInit() {
  }

  getNextLetter(increment: number) {
    let code = increment + 97;
    return String.fromCharCode(code);
  }

}
