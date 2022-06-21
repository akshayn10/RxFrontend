import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile/profile.component';

const routes: Routes = [{
  path: '',
    component: ProfilePageComponent}
];


export const ProfileRoutes = RouterModule.forChild(routes);
