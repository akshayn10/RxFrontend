import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusSubInfoComponent } from './cus-sub-info.component';

describe('CusSubInfoComponent', () => {
  let component: CusSubInfoComponent;
  let fixture: ComponentFixture<CusSubInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusSubInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusSubInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
