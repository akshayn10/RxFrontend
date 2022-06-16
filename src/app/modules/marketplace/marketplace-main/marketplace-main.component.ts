import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';
import { ProductService } from 'src/app/data/service/Product/product.service';
import { Product } from 'src/app/data/schema/product.model'


@Component({
  selector: 'app-marketplace-main',
  templateUrl: './marketplace-main.component.html',
  styleUrls: ['./marketplace-main.component.css']
})

export class MarketplaceMainComponent implements OnInit {
  searchKey: string = "";
  products: Product[] = [];
  productNames: string[] = [];
  myControl = new FormControl('');
  // options: string[] = [];
  filteredOptions!: Observable<string[]>;

  constructor(
    private _router: Router,
    private _sharedDataService: SharedDataService,
    private _productService: ProductService) { }

    ngOnInit() {
      this.getProducts(); 

      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    }

    getProducts() {
      this._productService.getProducts(this.searchKey).subscribe((data: Product[]) => {
        this.products = data;
  this.productNames=this.products.map(product=>product.name);
      });
    }

    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.productNames.filter(productName => productName.toLowerCase().includes(filterValue));
    }

    


  navigateToSearch() {
    console.log(this.myControl.value);
    if(this.myControl.value!=''){
      this.searchKey = this.myControl.value;
    }
    console.log(this.searchKey);
     this._sharedDataService.setSearchKey(this.searchKey);
    this._router.navigate(['/marketplace/search']);
  }
}
