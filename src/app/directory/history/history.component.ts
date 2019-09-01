import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { Companies } from '../companies';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {

  constructor(
    private _companiesService : CompaniesService
  ) {
  }
  companies:Companies[] = this._companiesService.companies;
  numbers = Array(26).fill(1);

  ngOnInit() {
  }

  getNextLetter(increment: number) {
    let code = increment + 97;
    return String.fromCharCode(code);
  }

}
