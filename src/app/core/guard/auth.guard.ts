import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from 'src/app/data/service/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this._authService.currentUserValue;
    console.log('currentUser', currentUser?.userName);
    if (currentUser?.isAuthenticated) {
      console.log('AuthGuard: currentUser: ', currentUser);
      if (route.data['roles'] && !route.data['roles'].some((r: string) => currentUser.roles.indexOf(r) >= 0)) {
        console.log("route "+route.data['roles']);
        console.log("rolesss"+currentUser.roles);
        console.log(route.data['roles'].some((r: string) => currentUser.roles.indexOf(r) >= 0))
        // role not authorised so redirect to home page
        alert('You are not authorised to view this page');
        return false;
      }
      // authorised so return true
      return true;
    }
    // not logged in so redirect to login page with the return url

    alert("You are not Logged in");
    return false;
  }
}
