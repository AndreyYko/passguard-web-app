import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMyAccountEmailComponent } from './settings-my-account-email.component';

describe('SettingsMyAccountEmailComponent', () => {
  let component: SettingsMyAccountEmailComponent;
  let fixture: ComponentFixture<SettingsMyAccountEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsMyAccountEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMyAccountEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
