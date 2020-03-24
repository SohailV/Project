import { NgModule, Injectable, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AppComponent } from './app.component';



const routes: Routes = [

  
  {path: 'home/home', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  
})

export class AppRoutingModule {

  
  
 }
