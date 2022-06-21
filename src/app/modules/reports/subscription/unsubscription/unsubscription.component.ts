import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { Stats } from 'src/app/data/schema/Stats';
import { ReportService } from 'src/app/data/service/Report/report.service';


@Component({
  selector: 'app-unsubscription',
  templateUrl: './unsubscription.component.html',
  styleUrls: ['./unsubscription.component.css']
})
export class UnsubscriptionComponent implements OnInit {
  stats!: Stats[];
  chartData!: SingleDataSet;
  chartLabels!: Label[];
  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.getChartData();
  }
  getChartData(): void {
    this.reportService.getUnsubscriptionStats().subscribe((stats) => {
      this.stats = stats;
      this.chartData = stats.map((stat) => stat.count);
      this.chartLabels = stats.map((stat) => stat.type);
    });
  }

}
