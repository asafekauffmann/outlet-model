import { Child02Component } from './child02/child02.component';
import { Child01Component } from './child01/child01.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';


const routes: Routes = [
   { path: 'first-component', component: FirstComponent,
      children: [
         {
            path: 'child01', component: Child01Component,
         },
         {
            path: 'child02', component: Child02Component,
         },
      ],      
   },


   { path: 'second-component', component: SecondComponent },

   /* { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, */
   /* { path: '**', component: PagenotfoundComponent } */

   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
