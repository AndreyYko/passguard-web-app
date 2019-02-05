import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultPageComponent } from './vault-page.component';

describe('VaultPageComponent', () => {
  let component: VaultPageComponent;
  let fixture: ComponentFixture<VaultPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaultPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
