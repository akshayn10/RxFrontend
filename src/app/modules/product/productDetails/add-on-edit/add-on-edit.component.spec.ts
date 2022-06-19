import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnEditComponent } from './add-on-edit.component';

describe('AddOnEditComponent', () => {
  let component: AddOnEditComponent;
  let fixture: ComponentFixture<AddOnEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOnEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
