import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultFiltersComponent } from './vault-filters.component';

describe('VaultFiltersComponent', () => {
  let component: VaultFiltersComponent;
  let fixture: ComponentFixture<VaultFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaultFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
