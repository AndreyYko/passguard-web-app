import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultItemsListComponent } from './vault-items-list.component';

describe('VaultItemsListComponent', () => {
  let component: VaultItemsListComponent;
  let fixture: ComponentFixture<VaultItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaultItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
