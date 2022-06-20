import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { Stats } from 'src/app/data/schema/Stats';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  
  stats!: Stats[];

  lineChartData0!: SingleDataSet;
  
  lineChartLabels0!: Label[];
  constructor() {}

  ngOnInit(): void {}
}
