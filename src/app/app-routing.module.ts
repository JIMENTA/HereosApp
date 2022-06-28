import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [

  {path:'auth', 
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'hereos', 
  loadChildren: () => import('./hereos/hereos.module').then(m => m.HereosModule)},
  {path:'404', 
  component: ErrorPageComponent},
  {path:'**', 
  //component: ErrorPageComponent
  redirectTo:'404'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
