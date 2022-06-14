import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private searchKey = new BehaviorSubject("");
  currentSearchKey = this.searchKey.asObservable();

  constructor() { }
  setSearchKey(searchKey: string) {
    this.searchKey.next(searchKey);
  }
}
