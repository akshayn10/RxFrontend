import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPieComponent } from './dash-pie.component';

describe('DashPieComponent', () => {
  let component: DashPieComponent;
  let fixture: ComponentFixture<DashPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
