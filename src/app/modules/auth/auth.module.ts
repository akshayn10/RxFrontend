import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutes } from './auth-routing.module';
import { Register1Component } from './register1/register1.component';
import { RouterModule } from '@angular/router';
import { Register2Component } from './register2/register2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Register3Component } from './register3/register3.component';
import { ForgetPWComponent } from './forget-pw/forget-pw.component';
import { ResetPwComponent } from './reset-pw/reset-pw.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ChangePwComponent } from './change-pw/change-pw.component';
import { MatSelectModule } from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    LoginComponent,
    Register1Component,
    Register2Component,
    Register3Component,
    ForgetPWComponent,
    ResetPwComponent,
    ChangePwComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutes,
    RouterModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    ToastrModule.forRoot()

  ],
  exports: [
  ]
})
export class AuthModule { }
