import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { OrganizationUser } from 'src/app/data/schema/Organization/organizationUser';
import { UserService } from 'src/app/data/service/auth/user.service';
import { AuthService } from 'src/app/data/service/auth/auth.service';




@Component({
  selector: 'app-manage-userrole',
  templateUrl: './manage-userrole.component.html',
  styleUrls: ['./manage-userrole.component.css']
})
export class ManageUserroleComponent implements OnInit {
  users!:OrganizationUser[];
  organizationId!:string
  tableData!:any;

  displayedColumns: string[] = ['username', 'email', 'role'];



  constructor(private router: Router,private _userService:UserService,private authService:AuthService) { }

  ngOnInit(): void {
    if(this.authService.currentUserValue){
      this.organizationId=this.authService.currentUserValue.organizationId;
    }
    this.getUsersForOrganization();



  }


  isManageUserRole() {
    return this.router.url == '/user-roles';
  }
  getUsersForOrganization(){
    this._userService.getUsersForOrganization(this.organizationId).subscribe(
      data => {
        this.users = data;
        this.tableData = data
        console.log(this.users);
      }
    )
  }
}
