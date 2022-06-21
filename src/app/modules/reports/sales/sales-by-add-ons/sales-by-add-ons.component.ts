import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { Stats } from 'src/app/data/schema/Stats';
import { ReportService } from 'src/app/data/service/Report/report.service';

@Component({
  selector: 'app-sales-by-add-ons',
  templateUrl: './sales-by-add-ons.component.html',
  styleUrls: ['./sales-by-add-ons.component.css']
})
export class SalesByAddOnsComponent implements OnInit {

  stats!: Stats[];
  chartData!: SingleDataSet;
  chartLabels!: Label[];
  chartType:ChartType='bar';

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.getSalesStats();
  }

  getSalesStats(): void {
    this.reportService.getSalesByAddOnStats().subscribe((stats) => {
      this.stats = stats;
      this.chartData = stats.map((stat) => stat.count);
      this.chartLabels = stats.map((stat) => stat.type);
    });
  }

}
