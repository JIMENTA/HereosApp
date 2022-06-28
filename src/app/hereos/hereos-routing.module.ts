import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { HereoComponent } from './pages/hereo/hereo.component';

const routes : Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
    {path: 'list', component: ListComponent},
    {path: 'add', component: AddComponent},
    {path: 'edit/:id', component: AddComponent},
    {path: 'search', component: SearchComponent},
    {path: ':id', component: HereoComponent},
    {path: '**', redirectTo:'list'},
    ]
  }
]



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ], 
  exports:[
    RouterModule
  ]
})
export class HereosRoutingModule { }
