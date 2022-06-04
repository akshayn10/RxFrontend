import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
