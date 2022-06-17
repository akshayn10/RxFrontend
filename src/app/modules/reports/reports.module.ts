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

@NgModule({
  declarations: [
    ReportsMainComponent,
    SubscriptionComponent,
    SalesComponent,
    RevenueComponent,
    PaymentsComponent,
    ReportChartComponent,
  ],
  imports: [CommonModule, ReportsRoutes, SharedModule, ChartsModule]
})
export class ReportsModule {}
