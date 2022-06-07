import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddOn } from 'src/app/data/schema/addOn'

@Component({
  selector: 'app-add-on-table',
  templateUrl: './add-on-table.component.html',
  styleUrls: ['./add-on-table.component.css']
})
export class AddOnTableComponent implements OnInit {

  dataSource = new MatTableDataSource<AddOn>();
  displayedColumns: String[] = ['addOnId',  'displayName','unitOfMeasure', 'productPlan','price', ]

  constructor() { }

  ngOnInit(): void {
  }

}
