import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
} from 'ng2-charts';
@Component({
  selector: 'app-dash-pie',
  templateUrl: './dash-pie.component.html',
  styleUrls: ['./dash-pie.component.css'],
})
export class DashPieComponent implements OnInit {
  doughChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
      labels: { fontColor: 'black', usePointStyle: true },
    },
    elements:{
      arc:{
        borderWidth:4

      }
    },
    // plugins: {
    //   datalabels: {
    //    formatter: (value, ctx) => {
    //     const label = ctx.chart.data.labels[ctx.dataIndex];
    //     return label;
    //    },
    showLines: true,
    tooltips: {
      enabled: true,
      mode: 'single',
    },
    spanGaps: true,
    circumference: 10,
  };

  doughChartLabels: Label[] = [
    ['Skate'],
    ['Enadoc Sign'],
    ['Flowdoh'],
    ['Enadoc Doc'],
  ];
  doughChartData: SingleDataSet = [30, 50, 20, 70];
  doughChartType: ChartType = 'doughnut';
  doughChartLegend = true;
  doughChartPlugins = [];

  constructor() {}
  ngOnInit(): void {}
}
