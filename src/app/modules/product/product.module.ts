import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './productMain/product-main/product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductRoutes } from './product-routing.module';
import { ProductTableComponent } from './productMain/product-table/product-table.component';
import {MatTableModule} from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { AddProductComponent } from './addProduct/add-product.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { AddPlanComponent } from './addPlan/add-plan.component';
import { ProductDetailsComponent } from './productDetails/product-details/product-details.component';
import {MatDividerModule} from '@angular/material/divider';
import { PlanTableComponent } from './productDetails/plan-table/plan-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddOnTableComponent } from './productDetails/add-on-table/add-on-table.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProductEditComponent } from './productDetails/product-edit/product-edit.component';
import { PlanEditComponent } from './productDetails/plan-edit/plan-edit.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductTableComponent,
    
    AddProductComponent,
    AddPlanComponent,
    ProductDetailsComponent,
    PlanTableComponent,
    ProductEditComponent,
    PlanEditComponent,
    AddOnTableComponent,
   
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutes,
    MatTableModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatPaginatorModule,
    MatCheckboxModule
    
  ],exports: [

  ]

})
export class ProductModule { }
