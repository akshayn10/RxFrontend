import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.component.html',
  styleUrls: ['./organization-profile.component.css']
})
export class OrganizationProfileComponent implements AfterViewInit {


  constructor(private router: Router) {}
  ngAfterViewInit(): void {
  }
  isDashboard() {
    return this.router.url == '/organization-profile';
  }


}
