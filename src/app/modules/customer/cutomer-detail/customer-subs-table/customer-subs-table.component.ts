import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CustomerSubscription } from 'src/app/data/schema/cutomerSubscriptions';
import { SubscriptionService } from 'src/app/data/service/Subscription/subscription.service';

@Component({
  selector: 'app-customer-subs-table',
  templateUrl: './customer-subs-table.component.html',
  styleUrls: ['./customer-subs-table.component.css'],
})
export class CustomerSubsTableComponent implements AfterViewInit, OnInit {
  customerSubscriptions: CustomerSubscription[] = [];
  customerId!: string;
  displayedColumns: string[] = ['product','plan','createdDate','endDate','status'];
  dataSource = new MatTableDataSource<CustomerSubscription>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private _router:Router,
    private _subscriptionService: SubscriptionService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.customerId = _activatedRoute.snapshot.paramMap.get('id') || '';
    // console.log(this.customerId);
  }
  ngOnInit(): void {
    this.getCustomerSubscriptions(this.customerId);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getCustomerSubscriptions(customerId: string) {
    this._subscriptionService
      .getCustomerSubscriptions(customerId)
      .subscribe((res) => {
        this.customerSubscriptions = res;
        this.dataSource.data = this.customerSubscriptions;
      });
  }
  navigate(row:any){
    this._router.navigate(['/subscription/details',row.subscriptionId]);
  }
}
