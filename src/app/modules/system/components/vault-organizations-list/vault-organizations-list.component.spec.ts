import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultOrganizationsListComponent } from './vault-organizations-list.component';

describe('VaultOrganizationsListComponent', () => {
  let component: VaultOrganizationsListComponent;
  let fixture: ComponentFixture<VaultOrganizationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaultOrganizationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultOrganizationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
