import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';
import { LoginService } from './service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean  {

      let isLoggedIn = false;

        this.authService.getLoggedInValue().subscribe( (data) => {
          console.log(data);
          isLoggedIn = data;
            }
          )

    return isLoggedIn; 

    //if i logged in it has to change to true

    //if i sign out it has to change to false
  }
  
}
