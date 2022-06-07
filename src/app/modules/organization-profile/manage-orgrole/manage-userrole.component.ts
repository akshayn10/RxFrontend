import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-userrole',
  templateUrl: './manage-userrole.component.html',
  styleUrls: ['./manage-userrole.component.css']
})
export class ManageUserroleComponent  implements AfterViewInit {


  constructor(private router: Router) {}
  ngAfterViewInit(): void {
  }
  isDashboard() {
    return this.router.url == '/manage-userrole';
  }


}
