import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/data/service/Product/product.service';
import { Product } from 'src/app/data/schema/product.model'
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements AfterViewInit, OnInit {

  products: Product[] = [];
  displayedColumns: String[] = ['logoURL', 'productId', 'name', 'planCount', 'addOnCount', 'redirectUrl'];

  productCount: string = '3';
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _router: Router,private productservice: ProductService) { }

 // ProductList: any = [];

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getProducts() {
    this.productservice.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.dataSource.data = this.products
      //console.log(this.dataSource)

    });
  }



  navigate(row: any) {
    this._router.navigate(['/product', row.productId]);
  }

}
