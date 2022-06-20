import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTrialsComponent } from './active-trials.component';

describe('ActiveTrialsComponent', () => {
  let component: ActiveTrialsComponent;
  let fixture: ComponentFixture<ActiveTrialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveTrialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTrialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
