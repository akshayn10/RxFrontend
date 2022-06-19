import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Register1Component } from './register1/register1.component';
import { Register2Component } from './register2/register2.component';
import { Register3Component } from './register3/register3.component';
import { ForgetPWComponent } from './forget-pw/forget-pw.component';
import { ResetPwComponent } from './reset-pw/reset-pw.component';
import { ChangePwComponent } from './change-pw/change-pw.component';
import { Component } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },

  {
    path: '',
    children:[
      { path: 'login', component: LoginComponent },
      { path: 'signup', component:Register1Component },
      { path: 'signup2', component:Register2Component },
      { path: 'signup3', component:Register3Component },
      { path: 'forgot-password', component:ForgetPWComponent },
      { path: 'reset-password', component:ResetPwComponent },
      { path: 'change-password', component:ChangePwComponent }
    ]
  }
];

export const AuthRoutes = RouterModule.forChild(routes);
