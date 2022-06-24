import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Role } from './core/constants/role';
import { AuthGuard } from './core/guard/auth.guard';
import { NoSubscriptionComponent } from './shared/components/no-subscription/no-subscription.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  { path: 'no-subscription', component: NoSubscriptionComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'bill',
    loadChildren: () =>
      import('./modules/bill/bill.module').then((m) => m.TransactionModule),
    canActivate: [AuthGuard],
    data: {},
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthGuard],
    data: {},
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'customer',
    loadChildren: () =>
      import('./modules/customer/customer.module').then(
        (m) => m.CustomerModule
      ),
    canActivate: [AuthGuard],
    data: {
      roles: [Role.Admin],
    },
  },

  {
    path: 'help',
    loadChildren: () =>
      import('./modules/help/help.module').then((m) => m.HelpModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./modules//product/product.module').then((m) => m.ProductModule),
    canActivate: [AuthGuard],
    data: {
      roles: [Role.Admin],
    },
  },
  {
    path: 'organization',
    loadChildren: () =>
      import('./modules/organization-profile/organization.module').then(
        (m) => m.OrganizationModule
      ),
    canActivate: [AuthGuard],
    data: {
      roles: [Role.Owner],
    },
  },
  {
    path: 'subscription',
    loadChildren: () =>
      import('./modules/subscription/subscription.module').then(
        (m) => m.SubscriptionModule
      ),
    canActivate: [AuthGuard],
    data: {
      // roles:[Role.Admin]
    },
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./modules/reports/reports.module').then((m) => m.ReportsModule),
    canActivate: [AuthGuard],
    data: {},
  },
  {
    path: 'marketplace',
    loadChildren: () =>
      import('./modules/marketplace/marketplace.module').then(
        (m) => m.MarketplaceModule
      ),
  },

  { path: '404', component: NotFoundComponent },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
