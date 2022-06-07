import { NgModule } from '@angular/core';
import {  OrganizationProfileComponent } from './organization-profile/organization-profile.component';
import { organizationRoutes } from './organization-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ManageUserroleComponent } from './manage-orgrole/manage-userrole.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    OrganizationProfileComponent,
    ManageUserroleComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    organizationRoutes,



  ]
})
export class  OrganizationModule { }
