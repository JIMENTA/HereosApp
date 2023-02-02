import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment} from '@angular/router';
import { Observable,tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService : AuthService, 
              private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean > | Promise<boolean > | boolean  {
      
      // if(this.authService.auth.id){
        //   return true
        // }
        // console.log('bloqueado por canActivaate')
        // return false
        
        return this.authService.verificaAutenticacion()
        .pipe(
          tap( authenticated => {
            if(!authenticated){
              this.router.navigate(['./auth/login'])
            }
          })
        )

    }
    
  

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.verificaAutenticacion()
    .pipe(
      tap( authenticated => {
        if(!authenticated){
          this.router.navigate(['./auth/login'])
        }
      })
    )


  }
}
