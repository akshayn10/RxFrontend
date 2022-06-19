import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './productMain/product-main/product.component';
import { AddProductComponent } from './addProduct/add-product.component';
import { AddPlanComponent } from './addPlan/add-plan.component';
import { ProductDetailsComponent } from './productDetails/product-details/product-details.component';
import { ProductEditComponent } from './productDetails/product-edit/product-edit.component';
import { PlanEditComponent } from './productDetails/plan-edit/plan-edit.component';
import{AddOnEditComponent}from'./productDetails/add-on-edit/add-on-edit.component'
import { AddOnPriceEditComponent } from './productDetails/add-on-price-edit/add-on-price-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },

  {
    path: '',
    children:[
      { path: 'addProduct', component: AddProductComponent },
      { path: ':id/addPlan', component: AddPlanComponent },
      { path: ':id', component: ProductDetailsComponent },
      { path: ':id/editProduct', component: ProductEditComponent },
      { path: ':id/plan/:planId/editPlan', component: PlanEditComponent},
      {path:  ':id/addOn/:addOnId/editAddOn', component: AddOnEditComponent},
      {path:':id/addOn/:addOnPriceId/editAddOnPrice',component:AddOnPriceEditComponent}
    ]
  }
];

export const ProductRoutes = RouterModule.forChild(routes);
