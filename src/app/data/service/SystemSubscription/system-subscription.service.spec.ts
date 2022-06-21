import { TestBed } from '@angular/core/testing';

import { SystemSubscriptionService } from './system-subscription.service';

describe('SystemSubscriptionService', () => {
  let service: SystemSubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemSubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
