import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Plan } from 'src/app/data/schema/plan.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { PlanService } from 'src/app/data/service/ProductPlan/plan.service';



@Component({
  selector: 'app-plan-table',
  templateUrl: './plan-table.component.html',
  styleUrls: ['./plan-table.component.css']
})
export class PlanTableComponent implements OnInit {
  productId!: string;

  dataSource = new MatTableDataSource();
  displayedColumns: String[] = ['planId', 'name', 'duration', 'price', 'description', 'edit']
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public _activatedRoute: ActivatedRoute, public router: Router, private planservice: PlanService) {
    this.productId = this._activatedRoute.snapshot.paramMap.get('id') || '';
    //this.planId = this.plan.planId||'';
  }


  ngOnInit(): void {
    this.getPlan(this.productId);
  }

  getPlan(productId: string) {
    this.planservice.getPlan(productId).subscribe((data: Plan[]) => {
      this.dataSource.data = data
      //console.log(this.dataSource)
    });
  }


  onDelete(planId: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.planservice.deletePlan(planId, this.productId).subscribe((res) => {
        console.log(res)
        this.ngOnInit();
      });
    }
  }

  onEdit(planId: string) {
    this.router.navigate(['/product/' + this.productId + '/plan/' + planId + '/editPlan']);
  }
}
