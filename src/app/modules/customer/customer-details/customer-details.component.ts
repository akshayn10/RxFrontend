import { Component, OnInit } from '@angular/core';
// import { getMaxListeners } from 'process';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  customerId: any = 'C000000000032';
  name: string = 'john';
  Email: any = ' rx23343423@getMaxListeners.com';
}
