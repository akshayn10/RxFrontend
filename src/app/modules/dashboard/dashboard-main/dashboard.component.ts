import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  lineChartData = {
    data: [65, 59, 80, 81, 56, 55, 40],
    label: 'Product A',
    chartLabels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ],
    yLabel:'Revenue'
  };
  lineChartData2 = {
    data: [95, 49, 50, 31, 76, 85, 30],
    label: 'Product B',
    chartLabels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ],
    yLabel:'Subscription'
  };

  constructor() {}

  ngOnInit(): void {}
}
