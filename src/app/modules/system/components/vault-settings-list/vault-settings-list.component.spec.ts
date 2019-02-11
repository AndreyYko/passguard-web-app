import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultSettingsListComponent } from './vault-settings-list.component';

describe('VaultSettingsListComponent', () => {
  let component: VaultSettingsListComponent;
  let fixture: ComponentFixture<VaultSettingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaultSettingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultSettingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
