import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OraganizationProfileComponent } from './organization-profile.component';

describe('OrganizationProfileComponent', () => {
  let component: OraganizationProfileComponent;
  let fixture: ComponentFixture<OraganizationProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OraganizationProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OraganizationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
