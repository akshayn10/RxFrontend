import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnTableComponent } from './add-on-table.component';

describe('AddOnTableComponent', () => {
  let component: AddOnTableComponent;
  let fixture: ComponentFixture<AddOnTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
