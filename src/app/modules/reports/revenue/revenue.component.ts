import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css'],
})
export class RevenueComponent implements OnInit {
  lineChartData0: SingleDataSet = [85, 72, 78, 75, 77, 75];
  lineChartLabels0: Label[] = [
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
