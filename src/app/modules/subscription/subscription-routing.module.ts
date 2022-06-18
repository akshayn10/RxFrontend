import { Routes, RouterModule } from '@angular/router';
import { Role } from 'src/app/core/constants/role';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { SubcsriptionDetailsComponent } from './subcsription-details/subcsription-details.component';
import { SubscriptionComponent } from './subscription-main/subscription.component';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionComponent,
    canActivate: [AuthGuard],
    data: {roles:[Role.Admin,Role.Owner]}
  },
  {
    path:'details/:id',
    component:SubcsriptionDetailsComponent
  }
];

export const SubscriptionRoutes = RouterModule.forChild(routes);
