import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponseData } from 'src/app/data/schema/auth/loginResponseData';
import { AuthService } from 'src/app/data/service/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements AfterViewInit,OnInit {
  currentUser! : LoginResponseData|null;


  constructor(private router: Router,private _authService:AuthService) {
    if(this._authService.currentUserValue){
    this.currentUser = this._authService.currentUserValue;

      // console.log(this._authService.currentUserValue);

    }
  }
  ngOnInit(): void {
    console.log("currentUser",this.currentUser);
    // this._authService.getcurrentUser.subscribe(x => this.currentUser = x);
    this._authService.currentUser.subscribe(x => this.currentUser = x);
    console.log("acurrentUser",this._authService.currentUserValue);
    console.log("acurrentUserpp",this.currentUser?.userName);

  }
  ngAfterViewInit(): void {

  }


  isProfile() {
    return this.router.url == '/profile';
  }
  navigateToOrganizationProfile(){
    this.router.navigate(['/organization']);

  }
  navigateToUserProfile(){
    this.router.navigate(['/profile']);

  }
  logout(){
    this._authService.signOut();
    this.router.navigate(['/auth/login']);

  }
}
