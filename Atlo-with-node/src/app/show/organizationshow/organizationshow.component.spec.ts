import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationshowComponent } from './organizationshow.component';

describe('OrganizationshowComponent', () => {
  let component: OrganizationshowComponent;
  let fixture: ComponentFixture<OrganizationshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
