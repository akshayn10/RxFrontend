import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketplaceService } from 'src/app/data/service/marketplace/marketplace.service';
import { MarketplaceProductForDisplay } from 'src/app/data/schema/marketplaceProduct';
import { SharedDataService } from '../../shared-data.service';

@Component({
  selector: 'app-marketplace-search',
  templateUrl: './marketplace-search.component.html',
  styleUrls: ['./marketplace-search.component.css'],
})
export class MarketplaceSearchComponent implements OnInit {
  searchKey: string = '';
  products: MarketplaceProductForDisplay[] = [];

  constructor(
    private _router: Router,
    private _sharedDataService: SharedDataService,
    private _marketplaceService: MarketplaceService
  ) {}

  ngOnInit(): void {}

  getProducts() {
    this._marketplaceService.getProducts(this.searchKey).subscribe((data) => {
      this.products = data;
    });
  }

  navigateToDetails(productId: string) {
    this._router.navigate(['/marketplace/product', productId]);
  }
  navigateToSearch() {
    console.log(this.searchKey+"search");
    this._sharedDataService.setSearchKey(this.searchKey);
    this.ngOnInit();


  }

  search() {
    console.log(this.searchKey);
    this._sharedDataService.setSearchKey(this.searchKey);

  }
}
