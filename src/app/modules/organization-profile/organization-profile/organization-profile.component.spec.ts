import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationProfileComponent } from './organization-profile.component';

describe('OrganizationProfileComponent', () => {
  let component: OrganizationProfileComponent;
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
