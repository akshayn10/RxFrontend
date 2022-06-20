import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { Stats } from 'src/app/data/schema/Stats';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent implements OnInit {
  stats!: Stats[];

  lineChartData0!: SingleDataSet;
  lineChartLabels0!: Label[];


  constructor() {}

  ngOnInit(): void {}
}
