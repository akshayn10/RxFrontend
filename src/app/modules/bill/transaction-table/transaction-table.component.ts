import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Transaction } from 'src/app/data/schema/transaction';
import { TransactionService } from 'src/app/data/service/Transaction/transaction.service';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css'],
})
export class TransactionTableComponent implements OnInit, AfterViewInit {
  transactions!: Transaction[];
  searchKey!: string;
  displayedColumns: string[] = [
    'transactionId',
    'date',
    'subscriptionId',
    'productName',
    'customerName',
    'amount',
    'status',
    'paymentFor',
  ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _transactionService: TransactionService) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
