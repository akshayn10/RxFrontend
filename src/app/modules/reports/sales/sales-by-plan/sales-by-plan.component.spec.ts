import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByPlanComponent } from './sales-by-plan.component';

describe('SalesByPlanComponent', () => {
  let component: SalesByPlanComponent;
  let fixture: ComponentFixture<SalesByPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesByPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesByPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
