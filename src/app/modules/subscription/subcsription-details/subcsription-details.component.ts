import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'src/app/data/schema/subcription';
import { SubscriptionService } from 'src/app/data/service/Subscription/subscription.service';

@Component({
  selector: 'app-subcsription-details',
  templateUrl: './subcsription-details.component.html',
  styleUrls: ['./subcsription-details.component.css']
})
export class SubcsriptionDetailsComponent implements OnInit,AfterViewInit {
  subscriptionId:string;
  subscription! :Subscription
  constructor(private _activatedRoute:ActivatedRoute,private _subscriptionService:SubscriptionService ) {
        this.subscriptionId= this._activatedRoute.snapshot.paramMap.get('id')||'';

  }

  ngOnInit(): void {
    this.getSubscriptionDetails(this.subscriptionId);


  }
  ngAfterViewInit() {

  }
  getSubscriptionDetails(subscriptionId:string){
    this._subscriptionService.getSubscriptionDetails(subscriptionId).subscribe(data=>{
      console.log(data);
      this.subscription=data;
    })

}
}
