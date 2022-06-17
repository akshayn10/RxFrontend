import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillComponent } from './bill-main/bill.component';
import { BillRoutes } from './bill-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BillTableComponent } from './bill-table/bill-table.component';
import { MatTableModule } from '@angular/material/table';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { HttpInterceptorService } from 'src/app/core/interceptor/http-interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [
    BillComponent,
    BillTableComponent,
    DialogComponent,
    TransactionTableComponent,
    BillDetailsComponent,
  ],
  imports: [
    CommonModule,
    BillRoutes,
    SharedModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatPaginatorModule,
    MatDividerModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS,useClass:HttpInterceptorService, multi: true }],
  exports: [],
})
export class TransactionModule {}
