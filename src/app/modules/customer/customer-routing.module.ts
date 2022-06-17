import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './cutomer-detail/customer-details/customer-details.component';
import { CustomerComponent } from './customer-main/customer.component';
import { AdminGuard } from 'src/app/core/guard/admin.guard';
import { OwnerGuard } from 'src/app/core/guard/owner.guard';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    canActivate:[OwnerGuard || AdminGuard],

  },
  {
    path: 'details/:id',
    component: CustomerDetailsComponent,
    canActivate:[AdminGuard]
  }
];

export const CustomerRoutes = RouterModule.forChild(routes);
