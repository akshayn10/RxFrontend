import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
})
export class SubscriptionComponent implements OnInit {
  lineChartData0: SingleDataSet = [85, 72, 78, 75, 77, 75];
  lineChartLabels0: Label[] = [
    ['January'],
    ['February'],
    ['March'],
    ['April'],
    ['May'],
    ['June'],
  ];
  lineChartData1: SingleDataSet = [100, 90, 80, 70, 60, 50];
  lineChartLabels1: Label[] = [
    ['January'],
    ['February'],
    ['March'],
    ['April'],
    ['May'],
    ['June'],
  ];
  lineChartData2: SingleDataSet = [100, 90, 80, 70, 60, 50];
  lineChartLabels2: Label[] = [
    ['January'],
    ['February'],
    ['March'],
    ['April'],
    ['May'],
    ['June'],
  ];
  lineChartData3: SingleDataSet = [100, 90, 80, 70, 60, 50];
  lineChartLabels3: Label[] = [
    ['January'],
    ['February'],
    ['March'],
    ['April'],
    ['May'],
    ['June'],
  ];
  lineChartData4: SingleDataSet = [100, 90, 80, 70, 60, 50];
  lineChartLabels4: Label[] = [
    ['January'],
    ['February'],
    ['March'],
    ['April'],
    ['May'],
    ['June'],
  ];
  lineChartData5: SingleDataSet = [100, 90, 80, 70, 60, 50];
  lineChartLabels5: Label[] = [
    ['January'],
    ['February'],
    ['March'],
    ['April'],
    ['May'],
    ['June'],
  ];
  constructor() {}

  ngOnInit(): void {}
}
