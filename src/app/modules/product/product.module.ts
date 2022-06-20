import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './productMain/product-main/product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductRoutes } from './product-routing.module';
import { ProductTableComponent } from './productMain/product-table/product-table.component';
import {MatTableModule} from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { AddProductComponent } from './addProduct/add-product.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPlanComponent } from './addPlan/add-plan.component';
import { ProductDetailsComponent } from './productDetails/product-details/product-details.component';
import {MatDividerModule} from '@angular/material/divider';
import { PlanTableComponent } from './productDetails/plan-table/plan-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddOnTableComponent } from './productDetails/add-on-table/add-on-table.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProductEditComponent } from './productDetails/product-edit/product-edit.component';
import { PlanEditComponent } from './productDetails/plan-edit/plan-edit.component';
import { MatSelectModule } from '@angular/material/select';
import { AddOnPriceComponent } from './productDetails/add-on-price/add-on-price.component';
import { AddOnDialogComponent } from './productDetails/add-on-dialog/add-on-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AddOnPriceDialogComponent } from './productDetails/add-on-price-dialog/add-on-price-dialog.component';
import { AddOnEditComponent } from './productDetails/add-on-edit/add-on-edit.component';
import { AddOnPriceEditComponent } from './productDetails/add-on-price-edit/add-on-price-edit.component';

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
    AddOnPriceComponent,
    AddOnDialogComponent,
    AddOnPriceDialogComponent,
    AddOnEditComponent,
    AddOnPriceEditComponent,


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
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    FormsModule

  ],exports: [

  ]

})
export class ProductModule { }
