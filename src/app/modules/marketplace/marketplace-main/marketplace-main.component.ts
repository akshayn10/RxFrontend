import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';
import { MarketplaceService } from 'src/app/data/service/marketplace/marketplace.service';
import { MarketplaceProductForDisplay } from 'src/app/data/schema/marketplaceProduct';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-marketplace-main',
  templateUrl: './marketplace-main.component.html',
  styleUrls: ['./marketplace-main.component.css']
})

export class MarketplaceMainComponent implements OnInit,AfterViewInit {
  searchKey: string = "";
  products: MarketplaceProductForDisplay[] = [];

  constructor(
    private _router: Router,
    private _sharedDataService: SharedDataService,
    private _marketplaceService:MarketplaceService,
    private spinner:NgxSpinnerService
    ) { }
  ngAfterViewInit(): void {

  }

    ngOnInit() {


    }
    getProducts() {
      this._marketplaceService.getProducts(this.searchKey,false).subscribe(
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
