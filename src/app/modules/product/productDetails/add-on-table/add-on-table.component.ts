import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddOn } from 'src/app/data/schema/addOn'

const ELEMENT_DATA: AddOn[] = [
  {addOnId: '12345678', displayName: 'Test-01', unitOfMeasure: 90,productPlan: 'Test-01', price: 90 },
  {addOnId: '87654321', displayName: 'Test-01', unitOfMeasure: 90,productPlan: 'Test-01', price: 90 },
];

@Component({
  selector: 'app-add-on-table',
  templateUrl: './add-on-table.component.html',
  styleUrls: ['./add-on-table.component.css']
})
export class AddOnTableComponent implements OnInit {

  // dataSource = new MatTableDataSource<AddOn>();
  dataSource = ELEMENT_DATA;
  displayedColumns: String[] = ['addOnId',  'displayName','unitOfMeasure', 'productPlan','price','edit' ]

  constructor() { }

  ngOnInit(): void {
  }

}
