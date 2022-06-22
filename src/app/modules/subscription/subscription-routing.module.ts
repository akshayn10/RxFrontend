import { Routes, RouterModule } from '@angular/router';
import { Role } from 'src/app/core/constants/role';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { SubcsriptionDetailsComponent } from './subcsription-details/subcsription-details.component';
import { SubscriptionComponent } from './subscription-main/subscription.component';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionComponent
  },
  {
    path:'details/:id',
    component:SubcsriptionDetailsComponent
  }
];

export const SubscriptionRoutes = RouterModule.forChild(routes);
