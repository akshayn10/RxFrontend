import { Component, OnInit } from '@angular/core';
import { SubscriptionStats } from 'src/app/data/schema/subscriptionStats';
import { SubscriptionService } from 'src/app/data/service/Subscription/subscription.service';

@Component({
  selector: 'app-sub-grid',
  templateUrl: './sub-grid.component.html',
  styleUrls: ['./sub-grid.component.css']
})
export class SubGridComponent implements OnInit {
  subscriptionStats!:SubscriptionStats;

  constructor(private _subscriptionService:SubscriptionService) { }

  ngOnInit(): void {
    this.getGridData();
  }
  getGridData(){
    this._subscriptionService.getSubscriptionStats().subscribe(data=>{
      this.subscriptionStats=data;
      console.log(this.subscriptionStats);
    }
    );
  }

}
