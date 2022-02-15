import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurevedLineComponent } from './curved-line.component';

describe('CurevedLineComponent', () => {
  let component: CurevedLineComponent;
  let fixture: ComponentFixture<CurevedLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurevedLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurevedLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
