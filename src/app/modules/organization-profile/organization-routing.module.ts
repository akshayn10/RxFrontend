import { RouterModule, Routes } from '@angular/router';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';

const routes: Routes = [{
  path: '',
    component: OrganizationProfileComponent}
];


export const organizationRoutes = RouterModule.forChild(routes);