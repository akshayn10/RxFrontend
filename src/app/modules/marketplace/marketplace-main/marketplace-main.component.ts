import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';


@Component({
  selector: 'app-marketplace-main',
  templateUrl: './marketplace-main.component.html',
  styleUrls: ['./marketplace-main.component.css']
})



export class MarketplaceMainComponent implements OnInit {
  searchKey: string = "";

  // myControl = new FormControl();
  filteredOptions!: Observable<string[]>;

  constructor(
    private _router: Router,
    private _sharedDataService: SharedDataService) { }

  ngOnInit(): void {
   
  }


  navigateToSearch() {
     this._sharedDataService.setSearchKey(this.searchKey);
    this._router.navigate(['/marketplace/search']);
  }
}
