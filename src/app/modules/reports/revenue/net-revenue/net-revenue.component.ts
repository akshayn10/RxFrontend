import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { Stats } from 'src/app/data/schema/Stats';
import { ReportService } from 'src/app/data/service/Report/report.service';


@Component({
  selector: 'app-net-revenue',
  templateUrl: './net-revenue.component.html',
  styleUrls: ['./net-revenue.component.css']
})
export class NetRevenueComponent implements OnInit {

  stats!: Stats[];
  chartData!: SingleDataSet;
  chartLabels!: Label[];

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.getRevenueStats();
  }

  getRevenueStats(): void {
    this.reportService.getRevenueStats().subscribe((stats) => {
      this.stats = stats;
      this.chartData = stats.map((stat) => stat.count);
      this.chartLabels = stats.map((stat) => stat.type);
    });
  }

}
