import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalksComponent } from './talks/talks.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
      path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {   path : 'talks', component :  TalksComponent  
  },
  {   path : 'home', component :  HomeComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
