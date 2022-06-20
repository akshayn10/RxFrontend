import { TestBed } from '@angular/core/testing';

import { AddOnPriceService } from './add-on-price.service';

describe('AddOnPriceService', () => {
  let service: AddOnPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddOnPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
