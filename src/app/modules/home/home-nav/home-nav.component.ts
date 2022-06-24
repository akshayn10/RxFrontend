import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/data/service/auth/auth.service';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit {
  isLoggedIn!: boolean;

  constructor(
    private _authService:AuthService
  ) { }

  ngOnInit(): void {
    if(this._authService.currentUserValue){
      if(this._authService.currentUserValue.isAuthenticated){
      this.isLoggedIn = true;
      }
    }
  }
}
