import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectAdminComponent } from './redirect-admin.component';

describe('RedirectAdminComponent', () => {
  let component: RedirectAdminComponent;
  let fixture: ComponentFixture<RedirectAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
