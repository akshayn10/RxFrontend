import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { Stats } from 'src/app/data/schema/Stats';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
})
export class SubscriptionComponent implements OnInit {
  stats!: Stats[];

  lineChartData0!: SingleDataSet;
  lineChartLabels0!: Label[];


  constructor() {}

  ngOnInit(): void {}
}
