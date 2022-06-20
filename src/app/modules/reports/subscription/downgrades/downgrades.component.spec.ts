import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowngradesComponent } from './downgrades.component';

describe('DowngradesComponent', () => {
  let component: DowngradesComponent;
  let fixture: ComponentFixture<DowngradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowngradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DowngradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
