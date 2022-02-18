import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer-main/customer.component';
import { CustomerRoutes } from './customer-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerConfigComponent } from './customer-config/customer-config.component';
import { CusSubInfoComponent } from './cus-sub-info/cus-sub-info.component';

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerDetailsComponent,
    CustomerConfigComponent,
    CusSubInfoComponent,
  ],
  imports: [CommonModule, CustomerRoutes, SharedModule],
  exports: [],
})
export class CustomerModule {}
