import { Routes, RouterModule } from '@angular/router';
import { MarketplaceMainComponent } from './marketplace-main/marketplace-main.component';
import { MarketplaceProductDetailComponent } from './marketplace-product-detail/marketplace-product-detail.component';
import { MarketplaceProductComponent } from './marketplace-product/marketplace-product.component';
import { MarketplaceSearchComponent } from './marketplace-search/marketplace-search/marketplace-search.component';

const routes: Routes = [
  {
    path: '',
    component: MarketplaceMainComponent
  },
  {
    path: '',
    children:[
      {
        path: 'search',
        component: MarketplaceSearchComponent
      },
      
      {
        path: 'product/detail',
        component: MarketplaceProductDetailComponent
      },
    ]
  }
  

];

export const MarketplaceRoutes = RouterModule.forChild(routes);

