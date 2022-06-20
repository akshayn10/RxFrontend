import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddOn } from 'src/app/data/schema/addOn'
import{AddOnService}from'src/app/data/service/AddOn/add-on.service'
import {ActivatedRoute,Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddOnEditComponent } from '../add-on-edit/add-on-edit.component';

@Component({
  selector: 'app-add-on-table',
  templateUrl: './add-on-table.component.html',
  styleUrls: ['./add-on-table.component.css']
})
export class AddOnTableComponent implements OnInit {
  productId!: string;

  dataSource = new MatTableDataSource();
  displayedColumns: String[] = ['addOnId',  'name','unitOfMeasure','edit']

  constructor( public _activatedRoute: ActivatedRoute,
    public router: Router,
    private addOnservice: AddOnService,
    private _dialog:MatDialog,)
    {
      this.productId = this._activatedRoute.snapshot.paramMap.get('id') || '';
      
     }

  ngOnInit(): void {
    this.getAddOn(this.productId);
  }

  getAddOn(productId: string) {
    this.addOnservice.getAddOns(productId).subscribe((data: AddOn[]) => {
      this.dataSource.data = data;
     
      //console.log(this.dataSource)
    });
  }

  onEdit(addOnId: string){    
    this.router.navigate(['/product/' + this.productId + '/addOn/' + addOnId + '/editAddOn']);
    
    
  }

  onDelete(addOnId:string){
    if (confirm('Are you sure to delete this record ?') == true) {
      this.addOnservice.deleteAddOn(this.productId,addOnId).subscribe((res) => {
        console.log(res)
        this.ngOnInit();
      });
    }
  }

}