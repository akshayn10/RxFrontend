import { Component, OnInit,Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SharedDataService } from '../../shared-data.service';
import { ProductService } from 'src/app/data/service/Product/product.service';
import { Product } from 'src/app/data/schema/product.model';


@Component({
  selector: 'app-marketplace-flex2',
  templateUrl: './marketplace-flex2.component.html',
  styleUrls: ['./marketplace-flex2.component.css']
})
export class MarketplaceFlex2Component implements OnInit {
  searchKey: string = "";
  products: Product[] = [];


  
  constructor(private _sharedDataService:SharedDataService,
    private productservice: ProductService,
    ) { }

  ngOnInit(): void {
    this._sharedDataService.currentSearchKey.subscribe(
      data => this.searchKey = data);
      console.log(this.searchKey)

      this.getProducts();
  }


  getProducts() {
    this.productservice.getProducts(this.searchKey).subscribe((data: Product[]) => {
      this.products = data;
      //  this.dataSource.data = this.products
      //console.log(this.dataSource)
    });
  }



}
