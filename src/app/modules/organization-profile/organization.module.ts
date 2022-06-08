import { NgModule } from '@angular/core';
import {OraganizationProfileComponent} from './organization-profile/organization-profile.component'
import { organizationRoutes } from './organization-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ManageUserroleComponent } from './manage-org-role/manage-userrole.component';
import { AddUserComponent } from './add-user/add-user.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    OraganizationProfileComponent,
    ManageUserroleComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    organizationRoutes,
    MatTableModule
  ]
})
export class  OrganizationModule { }
