import { Component,Input, OnInit ,Inject} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from 'src/app/data/service/Product/product.service';
import { Product } from 'src/app/data/schema/product.model'
import { AddOnDialogComponent } from '../add-on-dialog/add-on-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AddOnTableComponent } from '../add-on-table/add-on-table.component';
import { AddOnPriceDialogComponent } from '../add-on-price-dialog/add-on-price-dialog.component';
import { MarketplaceService } from 'src/app/data/service/marketplace/marketplace.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  submitted = false;
  productId:string;
  product!: Product ;
  planId:string;
  showSecret=false;
  webhookSecret='********************************************';



  constructor(public _activatedRoute: ActivatedRoute,
              public router: Router,
              private productservice:ProductService,
              private _dialog:MatDialog,
              private marketplaceService:MarketplaceService ) 
                    {
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

  onAddToMarketplace(productId :string){

}
  
  openDialog() {
    const dialog=this._dialog.open(AddOnDialogComponent,{
      width: '450px',
      height: '400px',
      data: {productId: this.productId}
    
    });
  }

  openDialogPrice() {
    const dialog=this._dialog.open(AddOnPriceDialogComponent,{
      width: '450px',
      height: '400px',
      data: {productId: this.productId}
    
    });
  }


}
