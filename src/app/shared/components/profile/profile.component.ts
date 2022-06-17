import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/service/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements AfterViewInit {

  constructor(private router: Router,private _authService:AuthService) {}
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
