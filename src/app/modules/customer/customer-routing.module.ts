import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './cutomer-detail/customer-details/customer-details.component';
import { CustomerComponent } from './customer-main/customer.component';
import { Role } from 'src/app/core/constants/role';
import { AuthGuard } from 'src/app/core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    canActivate:[AuthGuard],
    data: { roles: [Role.Admin,Role.Owner] }


  },
  {
    path: 'details/:id',
    component: CustomerDetailsComponent
  }
];

export const CustomerRoutes = RouterModule.forChild(routes);
