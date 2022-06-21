import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'src/app/data/schema/subcription';
import { SubscriptionService } from 'src/app/data/service/Subscription/subscription.service';

@Component({
  selector: 'app-sub-table',
  templateUrl: './sub-table.component.html',
  styleUrls: ['./sub-table.component.css'],
})
export class SubTableComponent implements AfterViewInit, OnInit {
  searchKey!: string;
  subscriptions: Subscription[] = [];
  displayedColumns: string[] = [
    'customerName',
    'product',
    'plan',
    'createdDate',
    'endDate',
    'status',
    'subscriptionType'
  ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private _router: Router,
    private _subscriptionService: SubscriptionService
  ) {}
  ngOnInit(): void {
    this.getSubscriptions();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getSubscriptions() {
    this._subscriptionService.getAllSubscriptions().subscribe((data) => {
      this.subscriptions = data;
      this.dataSource.data = this.subscriptions;
    });
  }

  navigate(row: any) {
    this._router.navigate(['/subscription/details', row.subscriptionId]);
  }
}
