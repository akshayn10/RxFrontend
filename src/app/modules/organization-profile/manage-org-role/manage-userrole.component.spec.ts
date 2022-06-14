import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserroleComponent } from './manage-userrole.component';

describe('ManageUserroleComponent', () => {
  let component: ManageUserroleComponent;
  let fixture: ComponentFixture<ManageUserroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageUserroleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
