import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule)
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'bill',
    loadChildren: () =>
      import('./modules/bill/bill.module').then(
        (m) => m.TransactionModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./modules/customer/customer.module').then(
        (m) => m.CustomerModule
      ),
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./modules/help/help.module').then((m) => m.HelpModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./modules//product/product.module').then((m) => m.ProductModule),
  },

  {
    path: 'subscription',
    loadChildren: () =>
      import('./modules/subscription/subscription.module').then(
        (m) => m.SubscriptionModule
      ),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./modules/reports/reports.module').then((m) => m.ReportsModule),
  },
  {
    path: 'marketplace',
    loadChildren: () =>
      import('./modules/marketplace/marketplace.module').then((m) => m.MarketplaceModule),

  },
  {
    path: 'top',
    component: TopBarComponent,
  },
  { path: '404', component: NotFoundComponent },
  {
    path: '**', redirectTo: '404'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
