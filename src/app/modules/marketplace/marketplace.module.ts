import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceMainComponent } from './marketplace-main/marketplace-main.component';
import { MarketplaceRoutes } from './marketplace-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MarketplaceProductComponent } from './marketplace-product/marketplace-product.component';
import { MarketplaceSearchComponent } from './marketplace-search/marketplace-search/marketplace-search.component';
import { MarketplaceFlex1Component } from './marketplace-search/marketplace-flex1/marketplace-flex1.component';
import { MarketplaceFlex2Component } from './marketplace-search/marketplace-flex2/marketplace-flex2.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MarketplaceProductDetailComponent } from './marketplace-product-detail/marketplace-product-detail.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {  MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    MarketplaceMainComponent,
    MarketplaceProductComponent,
    MarketplaceSearchComponent,
    MarketplaceFlex1Component,
    MarketplaceFlex2Component,
    MarketplaceProductDetailComponent,

  ],
  imports: [
    CommonModule,
    MarketplaceRoutes,
    SharedModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatTableModule,
    MatCardModule,

  ],
})
export class MarketplaceModule { }



