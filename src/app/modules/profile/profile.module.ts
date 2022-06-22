import { NgModule } from '@angular/core';
import { ProfilePageComponent } from './profile/profile.component';
import { ProfileRoutes } from './profile-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutes,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
