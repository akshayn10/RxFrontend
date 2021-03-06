import {
  Component,
  OnInit
} from '@angular/core';
import { SharedDataService } from '../../shared-data.service';
import { MarketplaceProductForDisplay } from 'src/app/data/schema/marketplaceProduct';
import { MarketplaceService } from 'src/app/data/service/marketplace/marketplace.service';

@Component({
  selector: 'app-marketplace-flex2',
  templateUrl: './marketplace-flex2.component.html',
  styleUrls: ['./marketplace-flex2.component.css'],
})
export class MarketplaceFlex2Component implements OnInit{
  searchKey: string = '';
  freeTrialFilter: boolean = false;
  products!: MarketplaceProductForDisplay[];

  constructor(
    private _sharedDataService: SharedDataService,
    private _marketplaceService: MarketplaceService,
  ) {}

  ngOnInit(): void {
    this._sharedDataService.currentSearchKey.subscribe((data) => {
      this.searchKey = data;
      this.getProducts();
    });
  }

  getProducts() {
    this._marketplaceService.getProducts(this.searchKey,this.freeTrialFilter).subscribe((data) => {
      this.products = data;
    });
    console.log(this.freeTrialFilter);
  }
}
