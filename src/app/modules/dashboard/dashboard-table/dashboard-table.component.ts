import { Component, Input, OnInit } from '@angular/core';
import { TableStats } from 'src/app/data/schema/dashboardTable';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css'],
})
export class DashboardTableComponent implements OnInit {
  @Input() tableData!: TableStats[];
  displayedColumns: string[] = ['index', 'product', 'name'];

  constructor() {}

  ngOnInit(): void {
  }
}
