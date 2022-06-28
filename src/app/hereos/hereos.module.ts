import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HereoComponent } from './pages/hereo/hereo.component';
import { ListComponent } from './pages/list/list.component';
import { HereosRoutingModule } from './hereos-routing.module';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HereoComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    HereosRoutingModule
  ]
})
export class HereosModule { }
