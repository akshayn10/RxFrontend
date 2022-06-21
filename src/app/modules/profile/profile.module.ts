import { NgModule } from '@angular/core';
import { ProfilePageComponent } from './profile/profile.component';
import { ProfileRoutes } from './profile-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutes
  ]
})
export class ProfileModule { }
