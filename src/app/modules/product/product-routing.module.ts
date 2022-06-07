import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './productMain/product-main/product.component';
import { AddProductComponent } from './addProduct/add-product.component';
import { AddPlanComponent } from './addPlan/add-plan.component';
import { ProductDetailsComponent } from './productDetails/product-details/product-details.component';

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
      { path: ':id', component: ProductDetailsComponent }
    ]
  }
];

export const ProductRoutes = RouterModule.forChild(routes);
