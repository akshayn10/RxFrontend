import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddOnPrice} from 'src/app/data/schema/addOnPricePerPlan';
import{AddOnPriceService}from'src/app/data/service/AddOnPrice/add-on-price.service'
import {ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-on-price',
  templateUrl: './add-on-price.component.html',
  styleUrls: ['./add-on-price.component.css']
})
export class AddOnPriceComponent implements OnInit {
planId!: string;
productId!: string;

  dataSource = new MatTableDataSource();
  displayedColumns: String[] = ['name',  'unitOfMeasure','price', 'planName','edit']


  constructor(public _activatedRoute: ActivatedRoute, 
    public router: Router, 
    private addOnPriceservice: AddOnPriceService) {
      this.productId = this._activatedRoute.snapshot.paramMap.get('id') || '';
     }

  ngOnInit(): void {
    this.getAddOnPrice(this.productId);
  }

  getAddOnPrice(productId: string) {
    this.addOnPriceservice.getAddOnPrice(productId).subscribe((data: AddOnPrice[]) => {
      this.dataSource.data = data
      //console.log(this.dataSource)
    });
  }

  onDelete(addOnId:string){
    if (confirm('Are you sure to delete this record ?') == true) {
      this.addOnPriceservice.deleteAddOn(addOnId).subscribe((res) => {
        console.log(res)
        this.ngOnInit();
      });
    }
  
  }

  onEdit(addOnId:string){

  }


}
