import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription-main/subscription.component';
import { SubscriptionRoutes } from './subscription-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubGridComponent } from './sub-grid/sub-grid.component';
import { SubTableComponent } from './sub-table/sub-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { SubcsriptionDetailsComponent } from './subcsription-details/subcsription-details.component';
import { AddOnTableComponent } from './subcsription-details/add-on-table/add-on-table.component';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    SubscriptionComponent,
    SubGridComponent,
    SubTableComponent,
    DialogComponent,
    SubcsriptionDetailsComponent,
    AddOnTableComponent
  ],
  imports: [
    CommonModule,
    SubscriptionRoutes,
    SharedModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    FormsModule,
    MatDividerModule,
    MatProgressSpinnerModule


  ],exports: [

  ]

})
export class SubscriptionModule { }
