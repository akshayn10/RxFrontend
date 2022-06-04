import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRoutes } from './profile-routing.module';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    ProfileRoutes

  ]
})
export class ProfileModule { }
