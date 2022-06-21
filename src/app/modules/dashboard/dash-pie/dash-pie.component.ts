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
      position: 'right',  
      labels: { 
        fontColor: '#292C38', 
        usePointStyle: true,
        fontFamily: 'Poppins', 
        fontStyle: '600',
        fontSize: 14,
      },
    },

    tooltips: {
      enabled: true,
      mode: 'single',
      backgroundColor: 'rgba(41, 44, 56, 0.8)',
      bodyFontColor: '#ECEFF4',
      bodyFontFamily: 'Poppins',
      bodyFontSize: 12,
      bodyFontStyle: '600',
      bodySpacing: 6,
      xPadding: 12,
      yPadding: 12,
      position: "nearest",
    },

    elements: {
      arc: {
        borderWidth: 0,
      },
    },

    showLines: true,

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
