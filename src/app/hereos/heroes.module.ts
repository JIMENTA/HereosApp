import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HereoComponent } from './pages/hereo/hereo.component';
import { ListComponent } from './pages/list/list.component';
import { HereosRoutingModule } from './heroes-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HereoComponent,
    HeroeTarjetaComponent,
    HomeComponent,
    ListComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    HereosRoutingModule
  ]
})
export class HereosModule { }
