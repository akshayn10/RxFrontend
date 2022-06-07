import { Routes, RouterModule } from '@angular/router';
import { ReportChartComponent } from './report-chart/report-chart.component';
import { ReportsMainComponent } from './reports-main/reports-main.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsMainComponent,
  },

  {
    path: 'subscription',
    children: [
      { path: 'summary', component: ReportChartComponent },
      { path: 'activation', component: ReportChartComponent },
      { path: 'active customer', component: ReportChartComponent },
      { path: 'Active Trials', component: ReportChartComponent },
      { path: 'Upgrade Details', component: ReportChartComponent },
      { path: 'Downgrade Details', component: ReportChartComponent },
    ],
  },
  {
    path: 'Sales',
    children: [
      { path: 'Sales By Plan', component: ReportChartComponent },
      { path: 'Sales By Add-Ons', component: ReportChartComponent },
    ],
  },
  {
    path: 'Revenue',
    children: [{ path: 'Net Revenue', component: ReportChartComponent }],
  },
  {
    path: 'Payments',
    children: [{ path: 'Payment Received', component: ReportChartComponent }],
  },
];

export const ReportsRoutes = RouterModule.forChild(routes);
