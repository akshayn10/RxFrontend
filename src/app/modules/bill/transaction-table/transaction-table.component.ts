import { NgxSpinnerService } from 'ngx-spinner';
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
    // 'transactionId',
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

  constructor(private _transactionService: TransactionService,private spinner:NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();
    this.getTransaction();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getTransaction() {
    this._transactionService.getTransactions().subscribe((data) => {
      this.transactions = data;
      this.dataSource.data = this.transactions;
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    });
  }
}
