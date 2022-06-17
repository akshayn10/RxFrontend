import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { AuthService } from 'src/app/data/service/auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService:AuthService,private router:Router){

  }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    const currentUser = this._authService.currentUserValue;
        if (currentUser) {
            if (route.data['roles'] && !route.data['roles'].some((r: string)=>currentUser.roles.indexOf(r)>=0) ) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/dashboard'] );
        return false;

  }
}
