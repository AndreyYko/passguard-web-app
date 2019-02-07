import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuLinkComponent } from './mobile-menu-link.component';

describe('MobileMenuLinkComponent', () => {
  let component: MobileMenuLinkComponent;
  let fixture: ComponentFixture<MobileMenuLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileMenuLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMenuLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
