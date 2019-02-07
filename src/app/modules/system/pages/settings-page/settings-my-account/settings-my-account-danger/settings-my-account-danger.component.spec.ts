import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMyAccountDangerComponent } from './settings-my-account-danger.component';

describe('SettingsMyAccountDangerComponent', () => {
  let component: SettingsMyAccountDangerComponent;
  let fixture: ComponentFixture<SettingsMyAccountDangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsMyAccountDangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMyAccountDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
