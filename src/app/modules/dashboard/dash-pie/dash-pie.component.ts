import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';
import { DashboardService } from 'src/app/data/service/Dashboard/dashboard.service';
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
    elements: {
      arc: {
        borderWidth: 2,
      },
    },
    showLines: true,
    tooltips: {
      enabled: true,
      mode: 'single',
    },
    spanGaps: true,
  };

  constructor(private _dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getChartDetails();
  }
  doughnutChartLabels!: Label[];
  doughnutChartData!: SingleDataSet;
  public doughnutChartType: ChartType = 'doughnut';

  getChartDetails(): void {
    this._dashboardService.getCustomerCountForProducts().subscribe((data) => {
      this.doughnutChartLabels = data.map((x) => x.type);
      this.doughnutChartData = data.map((x) => x.count);
    });
  }
}
