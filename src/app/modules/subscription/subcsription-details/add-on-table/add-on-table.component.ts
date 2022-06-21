import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddOnUsage } from 'src/app/data/schema/addUsage';
import { Subscription } from 'src/app/data/schema/subcription';
import { SubscriptionService } from 'src/app/data/service/Subscription/subscription.service';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-add-on-table',
  templateUrl: './add-on-table.component.html',
  styleUrls: ['./add-on-table.component.css']
})
export class AddOnTableComponent implements OnInit {
  @Input() subscriptionId!:string;

  searchKey! : string;
  addOnUsages:AddOnUsage[]=[];
  displayedColumns: string[] = ['addOnName','date','units','cost'];
  dataSource =new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private _dialog:MatDialog,private _subscriptionService:SubscriptionService) { }
  ngOnInit(): void {
    this.getAddOnUsage(this.subscriptionId);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  getAddOnUsage(subscriptionId:string){
    this._subscriptionService.getAddOnUsage(subscriptionId).subscribe(data=>{
      this.addOnUsages=data;
      this.dataSource.data=this.addOnUsages;
    })
  }


  // openDialog(row:AddOnUsage) {
  //   console.log('Row clicked', row);
  //   const dialog = this._dialog.open(DialogComponent, {
  //     width: '450px',
  //     height: '500px',
  //     // Can be closed only by clicking the close button
  //     data: row
  //   });
  // }
}
