import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { Plan } from 'src/app/data/schema/plan.model';
import {
  MarketplaceProduct,
  MarketplaceProductForDisplay,
} from 'src/app/data/schema/marketplaceProduct';
import { MarketplaceService } from 'src/app/data/service/marketplace/marketplace.service';
import { SharedDataService } from '../shared-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-marketplace-product-detail',
  templateUrl: './marketplace-product-detail.component.html',
  styleUrls: ['./marketplace-product-detail.component.css'],
})
export class MarketplaceProductDetailComponent implements OnInit {
  dataSource = new MatTableDataSource<Plan>();
  displayedColumns: String[] = ['planId', 'name', 'price'];
  productId;
  product!: MarketplaceProductForDisplay;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  constructor(
    private _marketplaceService: MarketplaceService,
    public _activatedRoute: ActivatedRoute,
    private router:Router
  ) {
    this.productId = this._activatedRoute.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );

    this.getProductById(this.productId);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  getProductById(productId: string) {
    this._marketplaceService.getProductById(productId).subscribe((data) => {
      this.product = data;
    });
  }
  navigateToPage(url:string){
    // this.router.navigate([url]);
    window.location.href = url;

  }
}
