import { Component, OnInit } from '@angular/core';
import { MarketplaceProduct, MarketplaceProductForDisplay } from 'src/app/data/schema/marketplaceProduct';
import { MarketplaceService } from 'src/app/data/service/marketplace/marketplace.service';import { SharedDataService } from '../shared-data.service';


@Component({
  selector: 'app-marketplace-product',
  templateUrl: './marketplace-product.component.html',
  styleUrls: ['./marketplace-product.component.css']
})
export class MarketplaceProductComponent implements OnInit {
  products!: MarketplaceProductForDisplay [];
  searchKey: string = "";

  constructor(private _sharedDataService:SharedDataService,
              private _marketplaceService:MarketplaceService) { }

  ngOnInit(): void {
    this._sharedDataService.currentSearchKey.subscribe(
      data => this.searchKey = data);
      console.log(this.searchKey)
    this.getProducts();
  }


  getProducts() {
    this._marketplaceService.getProducts(this.searchKey,false).subscribe(
      data => {
        this.products = data;
        console.log(this.products);
      }
    )
  }



}
