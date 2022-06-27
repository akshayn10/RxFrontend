import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer-main/customer.component';
import { CustomerRoutes } from './customer-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { CustomerGridComponent } from './customer-grid/customer-grid.component';
import { CustomerDetailsComponent } from './cutomer-detail/customer-details/customer-details.component';
import {MatDividerModule} from '@angular/material/divider';
import { CustomerSubsTableComponent } from './cutomer-detail/customer-subs-table/customer-subs-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OrganizationIdInterceptorService } from 'src/app/core/interceptors/organizationId-interceptor.service';
@NgModule({
  declarations: [
    CustomerComponent,
    CustomerTableComponent,
    CustomerGridComponent,
    CustomerDetailsComponent,
    CustomerSubsTableComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutes,
    SharedModule,
    MatDividerModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    FormsModule,
    NgxSpinnerModule

  ],
  exports: [
  ]

})
export class CustomerModule { }
