import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';


const routes: Routes = [
  {
    path: 'profile',
    children: [
      {
        path: 'userProfile',
        component: UserProfileComponent,
      },
      {
        path: 'organizationProfile',
        component: OrganizationProfileComponent,
      },
    ],
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
