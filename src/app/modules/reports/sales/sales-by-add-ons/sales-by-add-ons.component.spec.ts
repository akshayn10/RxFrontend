import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByAddOnsComponent } from './sales-by-add-ons.component';

describe('SalesByAddOnsComponent', () => {
  let component: SalesByAddOnsComponent;
  let fixture: ComponentFixture<SalesByAddOnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesByAddOnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesByAddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
