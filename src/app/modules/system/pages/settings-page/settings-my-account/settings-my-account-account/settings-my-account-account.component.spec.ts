import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMyAccountAccountComponent } from './settings-my-account-account.component';

describe('SettingsMyAccountAccountComponent', () => {
  let component: SettingsMyAccountAccountComponent;
  let fixture: ComponentFixture<SettingsMyAccountAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsMyAccountAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMyAccountAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
