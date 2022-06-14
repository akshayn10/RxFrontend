import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Register1Component } from './register1/register1.component';
import { Register2Component } from './register2/register2.component';
import { Register3Component } from './register3/register3.component';

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
      { path: 'signup3', component:Register3Component }
    ]
  }
];

export const AuthRoutes = RouterModule.forChild(routes);
