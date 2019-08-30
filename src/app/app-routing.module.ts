import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo: 'io', pathMatch: 'full' },
  {path:'io', component:HomeComponent,
    children:[
      {path:'',loadChildren:'./directory/directory.module#DirectoryModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
