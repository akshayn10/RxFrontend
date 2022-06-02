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
      //   { path: 'details/:id', component: ProductDetailsComponent }
    ],
  },
];

export const ReportsRoutes = RouterModule.forChild(routes);
