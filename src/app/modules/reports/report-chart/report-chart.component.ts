import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions, ChartType } from 'chart.js';
import { SingleDataSet, Color, Label } from 'ng2-charts';
import { Stats } from 'src/app/data/schema/Stats';

@Component({
  selector: 'app-report-chart',
  templateUrl: './report-chart.component.html',
  styleUrls: ['./report-chart.component.css'],
})
export class ReportChartComponent implements OnInit {
  @Input() chartData!: SingleDataSet;
  @Input() chartLabels!: Label[];

  lineChartData: SingleDataSet = [85, 72, 78, 75, 77, 75];
  lineChartLabels: Label[] = [
    ['January'],
    ['February'],
    ['March'],
    ['April'],
    ['May'],
    ['June'],
  ];
  lineChartOptions: ChartOptions = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'white',
      backgroundColor: '#A2BAF5',
    },
  ];
  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';

  constructor() {}
  ngOnInit(): void {
    this.lineChartData = this.chartData;
    this.lineChartLabels = this.chartLabels;
  }
}
