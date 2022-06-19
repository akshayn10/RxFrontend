import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetRevenueComponent } from './net-revenue.component';

describe('NetRevenueComponent', () => {
  let component: NetRevenueComponent;
  let fixture: ComponentFixture<NetRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetRevenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
