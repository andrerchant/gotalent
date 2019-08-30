import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectoryRoutingModule } from './directory-routing.module';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    DirectoryRoutingModule
  ]
})
export class DirectoryModule { }
