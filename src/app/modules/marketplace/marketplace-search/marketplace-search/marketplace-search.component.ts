import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { SharedDataService } from '../../shared-data.service';


@Component({
  selector: 'app-marketplace-search',
  templateUrl: './marketplace-search.component.html',
  styleUrls: ['./marketplace-search.component.css']
})
export class MarketplaceSearchComponent implements OnInit {
  searchKey: string = "";
  

  constructor(private _sharedDataService:SharedDataService ) { }

  ngOnInit(): void {
    this._sharedDataService.currentSearchKey.subscribe(
      data => this.searchKey = data);
      console.log(this.searchKey)
  }
 


 
  

}
