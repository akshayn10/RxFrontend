import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTitleComponent } from './dashboard-title/dashboard-title.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard-main/dashboard.component';
import { DashboardRoutes } from './dashboard-routing.module';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
import { ChartsModule } from 'ng2-charts';
import { DashPieComponent } from './dash-pie/dash-pie.component';
import { GraphComponent } from './graph/graph.component';
import { DashboardGridboxComponent } from './dashboard-gridbox/dashboard-gridbox.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    DashboardTitleComponent,
    DashboardComponent,
    DashboardTableComponent,
    DashPieComponent,
    GraphComponent,
    DashboardGridboxComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutes,
    ChartsModule,
    MatTableModule,
    MatTabsModule,
    MatProgressSpinnerModule

  ], exports: [

  ],
  bootstrap: [DashboardTableComponent]

})
export class DashboardModule { }
