import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsOrganizationsComponent } from './organizations.component';

describe('OrganizationsComponent', () => {
  let component: SettingsOrganizationsComponent;
  let fixture: ComponentFixture<SettingsOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
