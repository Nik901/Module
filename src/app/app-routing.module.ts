import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import {LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:'login',component:LoginComponent },
  {path:'page1',component:Page1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
