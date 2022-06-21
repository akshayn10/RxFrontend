import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsMainComponent } from './reports-main/reports-main.component';
import { ReportsRoutes } from './reports-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SalesComponent } from './sales/sales.component';
import { RevenueComponent } from './revenue/revenue.component';
import { PaymentsComponent } from './payments/payments.component';
import { ReportChartComponent } from './report-chart/report-chart.component';
import { ChartsModule } from 'ng2-charts';
import { SubscriptionSummaryComponent } from './subscription/subscription-summary/subscription-summary.component';
import { ActivationsComponent } from './subscription/activations/activations.component';
import { ActiveCustomersComponent } from './subscription/active-customers/active-customers.component';
import { UpgradesComponent } from './subscription/upgrades/upgrades.component';
import { DowngradesComponent } from './subscription/downgrades/downgrades.component';
import { SalesByPlanComponent } from './sales/sales-by-plan/sales-by-plan.component';
import { SalesByAddOnsComponent } from './sales/sales-by-add-ons/sales-by-add-ons.component';
import { NetRevenueComponent } from './revenue/net-revenue/net-revenue.component';
import { PaymentSummaryComponent } from './payments/payment-summary/payment-summary.component';
import { UnsubscriptionComponent } from './subscription/unsubscription/unsubscription.component';

@NgModule({
  declarations: [
    ReportsMainComponent,
    SubscriptionComponent,
    SalesComponent,
    RevenueComponent,
    PaymentsComponent,
    ReportChartComponent,
    SubscriptionSummaryComponent,
    ActivationsComponent,
    ActiveCustomersComponent,
    UnsubscriptionComponent,
    UpgradesComponent,
    DowngradesComponent,
    SalesByPlanComponent,
    SalesByAddOnsComponent,
    NetRevenueComponent,
    PaymentSummaryComponent,
  ],
  imports: [CommonModule, ReportsRoutes, SharedModule, ChartsModule],
})
export class ReportsModule {}
