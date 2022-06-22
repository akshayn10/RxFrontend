import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SharedDataService } from '../../shared-data.service';
import { MarketplaceProductForDisplay } from 'src/app/data/schema/marketplaceProduct';
import { MarketplaceService } from 'src/app/data/service/marketplace/marketplace.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-marketplace-flex2',
  templateUrl: './marketplace-flex2.component.html',
  styleUrls: ['./marketplace-flex2.component.css']
})
export class MarketplaceFlex2Component implements OnInit,OnChanges {
  searchKey: string = "";
  products!: MarketplaceProductForDisplay[];

  constructor(private _sharedDataService: SharedDataService, private _marketplaceService: MarketplaceService, private _router: Router,) { }

  ngOnInit(): void {
    this._sharedDataService.currentSearchKey.subscribe(
    data => {
      this.searchKey = data;
      this.getProducts();
    }

    );
    console.log(this.searchKey+'woefeouf')

  }
  ngOnChanges(changes: SimpleChanges) {
    // changes['searchKey'].;
  }

  getProducts() {
    console.log(this.searchKey + "erggre")
    this._marketplaceService.getProducts(this.searchKey).subscribe(
      data => {
        this.products = data;
        console.log(this.products);
      }
    )
  }




}
