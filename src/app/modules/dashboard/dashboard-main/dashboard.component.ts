import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataSets } from 'chart.js';
import { DashboardStats } from 'src/app/data/schema/dashboardStats';
import { TableStats } from 'src/app/data/schema/dashboardTable';
import { DashboardService } from 'src/app/data/service/Dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  subscriptionTitle = 'Subscription';
  revenueTitle = 'Revenue';

  chart1Data!:number[];
  chart1Labels!:string[];
  chart2Data!:number[];
  chart2Labels!:string[];

  planData!:TableStats[];
  addOnData!:TableStats[];

  lineChartData = {
    data:this.chart1Data,
    label: 'Product A',
    chartLabels:this.chart1Labels,
    yLabel:'Revenue'
  };
  lineChartData2 = {
    data: this.chart2Data,
    label: 'Product B',
    chartLabels: this.chart2Labels,
    yLabel:'Subscription'
  };

  constructor(private _dashboardService:DashboardService) {
    this.getSubscriptionData();
    this.getRevenueData();

  }


  ngOnInit(): void {
    this.getTableData();

  }

  getSubscriptionData():void{
    this._dashboardService.getSubscriptionStats().subscribe((data)=>{
      this.chart1Data = data.map((x)=>x.count);
      this.lineChartData.data = this.chart1Data;
      this.chart1Labels = data.map((x)=>x.type);
      this.lineChartData.chartLabels = this.chart1Labels;
      console.log(this.chart1Data)

    })
  }

  getRevenueData():void{
    this._dashboardService.getRevenueStats().subscribe((data)=>{
      this.lineChartData2.data = data.map((x)=>x.count);
      this.lineChartData2.chartLabels = data.map((x)=>x.type);
      this.chart2Data = data.map((x)=>x.count);
      this.chart2Labels = data.map((x)=>x.type);
      console.log(this.chart2Data)
    })
  }
  getTableData():void{
    this._dashboardService.getTableDetails().subscribe((data)=>{
      this.planData = data.plan;
      this.addOnData = data.addOn;
      console.log(data)
    })
  }


}
