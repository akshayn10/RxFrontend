import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import {OraganizationProfileComponent} from './organization-profile/organization-profile.component'
import { OrganizationRoutes } from './organization-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ManageUserroleComponent } from './manage-org-role/manage-userrole.component';
import { AddUserComponent } from './add-user/add-user.component'
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    OraganizationProfileComponent,
    ManageUserroleComponent,
    AddUserComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    OrganizationRoutes,
    MatTableModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule
  ]
})
export class  OrganizationModule { }
