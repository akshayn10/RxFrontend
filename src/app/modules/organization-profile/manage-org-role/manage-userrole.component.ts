import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/table';

export interface PeriodicElement {
  name: string;
  position: number;
  email: string;
  role: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Sulegjan_S', email: 'suledgan@gmail.com', role: 'Account Owner' },
  { position: 2, name: 'Akshajan_A', email: 'skshajan@gmail.com', role: 'Finance USer' },
  { position: 3, name: 'Ajeevitha_S', email: 'ajee@gmail.com', role: 'Admin' },
  { position: 4, name: 'Sarumatha_A', email: 'sarumatha@gmail.com', role: 'Account Owner' },
];

@Component({
  selector: 'app-manage-userrole',
  templateUrl: './manage-userrole.component.html',
  styleUrls: ['./manage-userrole.component.css']
})
export class ManageUserroleComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  data = ELEMENT_DATA;


  constructor(private router: Router) { }

  ngOnInit(): void {

  }


  isManageUserRole() {
    return this.router.url == '/user-roles';
  }


}
