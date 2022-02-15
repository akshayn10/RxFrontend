import { Component, Input,OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions,ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  ngOnInit(): void {
    this.lineChartData = [
      { data:this.graphData.data,
        label: this.graphData.label, },
    ];
    this.lineChartLabels=this.graphData.chartLabels;
    this.lineChartOptions = {
      responsive: true,
      showLines:true,
      scales: {
        // xAxes: [{
        //   scaleLabel:{
        //     display:true,
        //     labelString:'Time',
        //   }
        // }],
        yAxes: [{
          scaleLabel:{
            display:true,
            labelString:this.graphData.yLabel,
          }
        }]
      }
    }
  }
  @Input() graphData:any;
  lineChartData!: any[];
  lineChartLabels!: Label[];
  lineChartOptions!: ChartOptions;

  lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(52, 122, 226, 0.3)',
      borderColor: 'rgba(52, 122, 226, 1)',
    }
  ];
  lineChartLegend = true;
  lineChartType:ChartType= 'line';
  lineChartPlugins = [];

  // events
  // chartClicked({ event, active }: { event:, active: {}[] }): void {
  //   console.log(event, active);
  // }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}


