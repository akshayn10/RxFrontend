import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cus-sub-info',
  templateUrl: './cus-sub-info.component.html',
  styleUrls: ['./cus-sub-info.component.css'],
})
export class CusSubInfoComponent implements OnInit {
  constructor() {}
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {}
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
