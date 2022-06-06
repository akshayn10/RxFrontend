import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css'],
})
export class BillDetailsComponent implements OnInit {
  billId: string;

  constructor(private _activatedRoute: ActivatedRoute) {
    this.billId = this._activatedRoute.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {}
}
