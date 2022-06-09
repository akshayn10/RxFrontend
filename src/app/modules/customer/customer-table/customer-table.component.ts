import { AfterViewInit, Component, ViewChild,OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/data/schema/customer';
import { CustomerService } from 'src/app/data/service/Customer/customer.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements AfterViewInit,OnInit {
  searchKey: string="Search";
  customers: Customer [] = [];
  displayedColumns: string[] = ['name','email','status'];
  dataSource =new MatTableDataSource<Customer>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _router:Router,private _customerService:CustomerService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(){
  this.getCustomers();
  }


navigate(row:Customer){
  this._router.navigate(['/customer/details',row.customerId]);
}
getCustomers(){
  this._customerService.getCustomers(this.searchKey).subscribe(
    (data:Customer[])=>{
      this.customers=data;
      this.dataSource.data=this.customers;
      this.ngAfterViewInit();
    })
}
emptySearch(){
  this.searchKey="";
}
}
