import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { CustomerStats } from 'src/app/data/schema/customer';
import { CustomerService } from 'src/app/data/service/Customer/customer.service';

@Component({
  selector: 'app-customer-grid',
  templateUrl: './customer-grid.component.html',
  styleUrls: ['./customer-grid.component.css']
})
export class CustomerGridComponent implements OnInit {
  customerStats!:CustomerStats;



  constructor(private _customerService:CustomerService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getStats();
  }
  getStats(){
    this._customerService.getCustomerStats().subscribe(data=>{
      this.customerStats=data;
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    }
    );
  }

}
