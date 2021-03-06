import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  isLoading = false;

  displayedColumns: string[] = ['username', 'email', 'role', 'delete'];



  constructor(private router: Router,private _userService:UserService,private authService:AuthService) { }

  ngOnInit(): void {
    if(this.authService.currentUserValue){
      this.organizationId=this.authService.currentUserValue.organizationId;
    }
    this.getUsersForOrganization();
  }
  deleteUser(email:string){
    this._userService.deleteUser(email).subscribe(
      data => {
        this.isLoading = false;
        console.log(data);
        this.getUsersForOrganization();
      }
    )
  }

  isManageUserRole() {
    return this.router.url == '/user-roles';
  }
  getUsersForOrganization(){
    this.isLoading = true;
    this._userService.getUsersForOrganization(this.organizationId).subscribe(
      data => {
        this.isLoading = false;
        this.users = data;
        this.tableData = data
        console.log(this.users);
      }
    )
  }
}
