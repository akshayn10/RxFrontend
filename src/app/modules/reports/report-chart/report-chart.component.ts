import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions, ChartType } from 'chart.js';
import { SingleDataSet, Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-report-chart',
  templateUrl: './report-chart.component.html',
  styleUrls: ['./report-chart.component.css'],
})
export class ReportChartComponent implements OnInit {
  data!: any;
  lineChartData!: SingleDataSet;
  // = [85, 72, 78, 75, 77, 75];
  lineChartLabels!: Label[];
  //   = [
  //   ['January'],
  //   ['February'],
  //   ['March'],
  //   ['April'],
  //   ['May'],
  //   ['June'],
  // ];
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

  constructor(private _router: Router) {
    console.log(this._router.getCurrentNavigation()?.extras.state);
    this.data = history.state;
    this.lineChartData = this.data[0];
    this.lineChartLabels = this.data[1];
  }
  ngOnInit(): void {}
}
