import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsOrganizationsListItemComponent } from './settings-organizations-list-item.component';

describe('SettingsOrganizationsListItemComponent', () => {
  let component: SettingsOrganizationsListItemComponent;
  let fixture: ComponentFixture<SettingsOrganizationsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsOrganizationsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsOrganizationsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
