import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ManageUserroleComponent } from './manage-org-role/manage-userrole.component';
import { OraganizationProfileComponent } from './organization-profile/organization-profile.component';

const routes: Routes = [
  {
  path: '',
  component: OraganizationProfileComponent
},
{
  path: '',
  children:[
    {
      path: 'user-roles',
      component: ManageUserroleComponent
    },
    {
      path: 'user-roles/add-user',
      component: AddUserComponent
    },
  ]
}
];


export const OrganizationRoutes = RouterModule.forChild(routes);