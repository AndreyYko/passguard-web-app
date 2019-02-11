import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserPopUpComponent } from './header-user-pop-up.component';

describe('HeaderUserPopUpComponent', () => {
  let component: HeaderUserPopUpComponent;
  let fixture: ComponentFixture<HeaderUserPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderUserPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderUserPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
