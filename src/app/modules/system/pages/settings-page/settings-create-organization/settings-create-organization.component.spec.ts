import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCreateOrganizationComponent } from './settings-create-organization.component';

describe('SettingsCreateOrganizationComponent', () => {
  let component: SettingsCreateOrganizationComponent;
  let fixture: ComponentFixture<SettingsCreateOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsCreateOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsCreateOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
