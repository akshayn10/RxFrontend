import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';
import { ProductService } from 'src/app/data/service/Product/product.service';
import { Product } from 'src/app/data/schema/product.model'
import { MarketplaceService } from 'src/app/data/service/marketplace/marketplace.service';
import { MarketplaceProduct, MarketplaceProductForDisplay } from 'src/app/data/schema/marketplaceProduct';

@Component({
  selector: 'app-marketplace-main',
  templateUrl: './marketplace-main.component.html',
  styleUrls: ['./marketplace-main.component.css']
})

export class MarketplaceMainComponent implements OnInit {
  searchKey: string = "";
  products: MarketplaceProductForDisplay[] = [];

  constructor(
    private _router: Router,
    private _sharedDataService: SharedDataService,
    private _marketplaceService:MarketplaceService) { }

    ngOnInit() {
    }
    getProducts() {
      this._marketplaceService.getProducts(this.searchKey).subscribe(
        data => {
          this.products = data;
        }
      )
    }
    navigateToDetails(productId:string){
      this._router.navigate(['/marketplace/product',productId]);
    }

  navigateToSearch() {

    console.log(this.searchKey);
     this._sharedDataService.setSearchKey(this.searchKey);

    this._router.navigate(['/marketplace/search']);
  }
}
