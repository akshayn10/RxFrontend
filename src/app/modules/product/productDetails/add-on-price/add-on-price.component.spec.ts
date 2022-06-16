import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnPriceComponent } from './add-on-price.component';

describe('AddOnPriceComponent', () => {
  let component: AddOnPriceComponent;
  let fixture: ComponentFixture<AddOnPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOnPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
