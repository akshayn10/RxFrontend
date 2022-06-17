import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from 'src/app/data/service/auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _authService:AuthService,private route:Router){

  }
  canActivate(){
    if(this._authService.isAdmin()){
    return true;
    }else{
      this.route.navigate(['dashboard'])
      return false;
    }
  }

}
