import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from 'src/app/data/service/Product/product.service';
import { Product } from 'src/app/data/schema/product.model'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId:string;
  product!: Product ;
  planId:string;
  showSecret=false;
  webhookSecret='********************************************';



  constructor(public _activatedRoute: ActivatedRoute,public router: Router, private productservice:ProductService) {
    this.productId = this._activatedRoute.snapshot.paramMap.get('id')||'';
    this.planId = this._activatedRoute.snapshot.paramMap.get('planId') || '';

  }

  ngOnInit(): void {

    this.getProductById(this.productId);

  }


  getProductById(productId:string){
    this.productservice.getProductById(productId).subscribe(resp => {
      this.product =resp ;


    })
  }
  toggleViewSecret(){
    this.showSecret = !this.showSecret;
  }
  navigateToAddPlan(){
    this.router.navigate(['/product/'+this.productId+'/addPlan'])
  }

  navigateToEditProduct(){
    this.router.navigate(['/product/'+this.productId+'/editProduct'])
  }

  navigateToProductList(){
    this.router.navigate(['/product'])}

  onDelete(productId: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.productservice.deleteProduct(productId).subscribe((res) => {
        this.router.navigate([`/product`]);
      });

    }
  }







}
