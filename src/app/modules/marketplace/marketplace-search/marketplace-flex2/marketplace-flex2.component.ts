import { Component, OnInit,Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SharedDataService } from '../../shared-data.service';
import { ProductService } from 'src/app/data/service/Product/product.service';
import { Product } from 'src/app/data/schema/product.model';
import { MarketplaceProduct, MarketplaceProductForDisplay } from 'src/app/data/schema/marketplaceProduct';
import { MarketplaceService } from 'src/app/data/service/marketplace/marketplace.service';


@Component({
  selector: 'app-marketplace-flex2',
  templateUrl: './marketplace-flex2.component.html',
  styleUrls: ['./marketplace-flex2.component.css']
})
export class MarketplaceFlex2Component implements OnInit {
  searchKey: string = "";
  products!: MarketplaceProductForDisplay [];



  constructor(private _sharedDataService:SharedDataService,private _marketplaceService:MarketplaceService ) { }

  ngOnInit(): void {
    this._sharedDataService.currentSearchKey.subscribe(
      data => this.searchKey = data);
      console.log(this.searchKey)

      this.getProducts();
  }


  getProducts() {
    this._marketplaceService.getProducts(this.searchKey).subscribe(
      data => {
        this.products = data;
        console.log(this.products);
      }
    )
  }



}
