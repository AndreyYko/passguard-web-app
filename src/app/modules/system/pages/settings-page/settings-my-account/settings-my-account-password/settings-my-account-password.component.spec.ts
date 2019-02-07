import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMyAccountPasswordComponent } from './settings-my-account-password.component';

describe('SettingsMyAccountPasswordComponent', () => {
  let component: SettingsMyAccountPasswordComponent;
  let fixture: ComponentFixture<SettingsMyAccountPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsMyAccountPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMyAccountPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
