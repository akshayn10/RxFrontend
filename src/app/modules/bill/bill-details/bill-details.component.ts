import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillDetail } from 'src/app/data/schema/Bill-Details/billDetail';
import { BillService } from 'src/app/data/service/Bill/bill.service';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css'],
})
export class BillDetailsComponent implements OnInit {
  billId: string;
  billDetails!:BillDetail;

  constructor(private _activatedRoute: ActivatedRoute,private _billService:BillService) {
    this.billId = this._activatedRoute.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.getBillForCustomer();
  }

  getBillForCustomer() {
    this._billService.getBillForCustomer().subscribe((data) => {
      console.log(data);
      this.billDetails = data;
    });
  }
}
