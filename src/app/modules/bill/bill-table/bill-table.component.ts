import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BillService } from 'src/app/data/service/Bill/bill.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-bill-table',
  templateUrl: './bill-table.component.html',
  styleUrls: ['./bill-table.component.css'],
})
export class BillTableComponent implements AfterViewInit, OnInit {
  searchKey: string="";
  displayedColumns: string[] = ['billId', 'name', 'generatedDate', 'amount'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private _billService: BillService, private _router: Router) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.getBills();
  }

  getBills() {
    this._billService.getAllBills(this.searchKey).subscribe((data) => {
      this.dataSource.data = data;
      console.log(data);
    });
  }

  /** Announce the change in sort state for assistive technology. */

  navigate(row: any) {
    this._router.navigate(['/bill/details/' + row.billId]);
  }
}
