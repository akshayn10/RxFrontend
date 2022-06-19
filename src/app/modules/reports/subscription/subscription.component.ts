import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { Stats } from 'src/app/data/schema/Stats';
import { ReportService } from 'src/app/data/service/Report/report.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
})
export class SubscriptionComponent implements OnInit {
  stats!:Stats[];

  lineChartData0!: SingleDataSet
  //  = [85, 72, 78, 75, 77, 75];
  lineChartLabels0!: Label[]
  // = [
  //   ['January'],
  //   ['February'],
  //   ['March'],
  //   ['April'],
  //   ['May'],
  //   ['June'],
  //   ['July'],
  //   ['August'],
  //   ['September'],
  //   ['October'],
  //   ['November'],
  //   ['December']


  // ];
  lineChartData1: SingleDataSet = [100, 90, 80, 70, 60, 50];
  lineChartLabels1: Label[] = [
    ['January'],
    ['February'],
    ['March'],
    ['April'],
    ['May'],
    ['June'],
  ];
  lineChartData2: SingleDataSet = [100, 90, 80, 70, 60, 50];
  lineChartLabels2: Label[] = [
    ['January'],
    ['February'],
    ['March'],
    ['April'],
    ['May'],
    ['June'],
  ];
  lineChartData3: SingleDataSet = [100, 90, 80, 70, 60, 50];
  lineChartLabels3: Label[] = [
    ['January'],
    ['February'],
    ['March'],
    ['April'],
    ['May'],
    ['June'],
  ];
  lineChartData4: SingleDataSet = [100, 90, 80, 70, 60, 50];
  lineChartLabels4: Label[] = [
    ['January'],
    ['February'],
    ['March'],
    ['April'],
    ['May'],
    ['June'],
  ];
  lineChartData5: SingleDataSet = [100, 90, 80, 70, 60, 50];
  lineChartLabels5: Label[] = [
    ['January'],
    ['February'],
    ['March'],
    ['April'],
    ['May'],
    ['June'],
  ];
  constructor(private reportService:ReportService) {

  }
  getSubscriptionStats():void{
    console
    this.reportService.getSubscriptionStats().subscribe(stats=>{
      this.stats=stats;
      console.log(stats);

      this.lineChartData0=stats.map(stat=>stat.count);
      this.lineChartLabels0=stats.map(stat=>stat.type);
    }
    )
  }

  ngOnInit(): void {
    this.getSubscriptionStats();
  }
}
