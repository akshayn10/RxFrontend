import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SharedDataService } from '../../shared-data.service';
import { ProductService } from 'src/app/data/service/Product/product.service';
import { Product } from 'src/app/data/schema/product.model';
import { MarketplaceProduct, MarketplaceProductForDisplay } from 'src/app/data/schema/marketplaceProduct';
import { MarketplaceService } from 'src/app/data/service/marketplace/marketplace.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-marketplace-flex2',
  templateUrl: './marketplace-flex2.component.html',
  styleUrls: ['./marketplace-flex2.component.css']
})
export class MarketplaceFlex2Component implements OnInit {
  searchKey: string = "";
  products!: MarketplaceProductForDisplay[];
  myControl = new FormControl('');
  productNames: string[] = [];
  filteredOptions!: Observable<string[]>;
  options: string[] = ['One', 'Two', 'Three'];


  constructor(private _sharedDataService: SharedDataService, private _marketplaceService: MarketplaceService, private _router: Router,) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

    this._sharedDataService.currentSearchKey.subscribe(
    data => this.searchKey = data);
    console.log(this.searchKey)
    this.getProducts();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  getProducts() {
    console.log(this.searchKey + "erggre")
    this._marketplaceService.getProducts(this.searchKey).subscribe(
      data => {
        this.products = data;
        this.productNames = this.products.map(product => product.name);
        console.log(this.products);
      }
    )
  }




}
