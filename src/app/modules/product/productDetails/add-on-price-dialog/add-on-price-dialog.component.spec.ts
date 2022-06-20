import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnPriceDialogComponent } from './add-on-price-dialog.component';

describe('AddOnPriceDialogComponent', () => {
  let component: AddOnPriceDialogComponent;
  let fixture: ComponentFixture<AddOnPriceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnPriceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOnPriceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
