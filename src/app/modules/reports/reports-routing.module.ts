import { Routes, RouterModule } from '@angular/router';
import { PaymentSummaryComponent } from './payments/payment-summary/payment-summary.component';
import { ReportChartComponent } from './report-chart/report-chart.component';
import { ReportsMainComponent } from './reports-main/reports-main.component';
import { NetRevenueComponent } from './revenue/net-revenue/net-revenue.component';
import { SalesByAddOnsComponent } from './sales/sales-by-add-ons/sales-by-add-ons.component';
import { SalesByPlanComponent } from './sales/sales-by-plan/sales-by-plan.component';
import { ActivationsComponent } from './subscription/activations/activations.component';
import { ActiveCustomersComponent } from './subscription/active-customers/active-customers.component';
import { UnsubscriptionComponent } from './subscription/unsubscription/unsubscription.component';
import { DowngradesComponent } from './subscription/downgrades/downgrades.component';
import { SubscriptionSummaryComponent } from './subscription/subscription-summary/subscription-summary.component';
import { UpgradesComponent } from './subscription/upgrades/upgrades.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsMainComponent,
  },

  {
    path: 'subscription',
    children: [
      { path: 'summary', component: SubscriptionSummaryComponent },
      { path: 'activation', component: ActivationsComponent },
      { path: 'active-customer', component: ActiveCustomersComponent },
      { path: 'unsubscription', component: UnsubscriptionComponent },
      { path: 'upgrade-details', component: UpgradesComponent },
      { path: 'downgrade-details', component: DowngradesComponent },
    ],
  },
  {
    path: 'sales',
    children: [
      { path: 'sales-by-plan', component: SalesByPlanComponent },
      { path: 'sales-by-add-ons', component: SalesByAddOnsComponent },
    ],
  },
  {
    path: 'revenue',
    children: [{ path: 'net-revenue', component: NetRevenueComponent }],
  },
  {
    path: 'payments',
    children: [
      { path: 'payment-received', component: PaymentSummaryComponent },
    ],
  },
];

export const ReportsRoutes = RouterModule.forChild(routes);
