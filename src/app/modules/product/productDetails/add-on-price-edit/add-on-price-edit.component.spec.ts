import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnPriceEditComponent } from './add-on-price-edit.component';

describe('AddOnPriceEditComponent', () => {
  let component: AddOnPriceEditComponent;
  let fixture: ComponentFixture<AddOnPriceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnPriceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOnPriceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
