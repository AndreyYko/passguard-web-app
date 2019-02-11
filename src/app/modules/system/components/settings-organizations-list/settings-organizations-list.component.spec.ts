import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsOrganizationsListComponent } from './settings-organizations-list.component';

describe('SettingsOrganizationsListComponent', () => {
  let component: SettingsOrganizationsListComponent;
  let fixture: ComponentFixture<SettingsOrganizationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsOrganizationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsOrganizationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
