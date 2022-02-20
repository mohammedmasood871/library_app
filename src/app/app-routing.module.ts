import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksIdViewComponent } from './books-id-view/books-id-view.component';
import { BooksViewComponent } from './books-view/books-view.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:'', component:LandingComponent},
  {path:'books', component:BooksViewComponent},  
  {path:'bookId', component:  BooksIdViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
