import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { Stats } from 'src/app/data/schema/Stats';
import { ReportService } from 'src/app/data/service/Report/report.service';

@Component({
  selector: 'app-subscription-summary',
  templateUrl: './subscription-summary.component.html',
  styleUrls: ['./subscription-summary.component.css'],
})
export class SubscriptionSummaryComponent implements OnInit {
  stats!: Stats[];
  chartData!: SingleDataSet;
  chartLabels!: Label[];

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.getSubscriptionStats();
  }

  getSubscriptionStats(): void {
    this.reportService.getSubscriptionStats().subscribe((stats) => {
      this.stats = stats;
      this.chartData = stats.map((stat) => stat.count);
      this.chartLabels = stats.map((stat) => stat.type);
    });
  }
}
