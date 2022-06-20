import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { Stats } from 'src/app/data/schema/Stats';
@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css'],
})
export class RevenueComponent implements OnInit {
  stats!: Stats[];

  lineChartData0!: SingleDataSet;
  lineChartLabels0!: Label[];


  constructor() {}

  ngOnInit(): void {}
}
