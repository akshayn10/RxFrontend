import { Component, OnInit } from '@angular/core';
import { DashboardStats } from 'src/app/data/schema/dashboardStats';
import { DashboardService } from 'src/app/data/service/Dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard-gridbox',
  templateUrl: './dashboard-gridbox.component.html',
  styleUrls: ['./dashboard-gridbox.component.css']
})
export class DashboardGridboxComponent implements OnInit {
  gridStats!:DashboardStats;




  constructor(private _dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.getGridStats();
  }
  getGridStats():void{
    this._dashboardService.getGridStats().subscribe((data)=>{
      console.log(data)
      this.gridStats = data;

    })
  }

}
