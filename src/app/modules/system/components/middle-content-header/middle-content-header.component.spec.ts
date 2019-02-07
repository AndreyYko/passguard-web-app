import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleContentHeaderComponent } from './middle-content-header.component';

describe('MiddleContentHeaderComponent', () => {
  let component: MiddleContentHeaderComponent;
  let fixture: ComponentFixture<MiddleContentHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleContentHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
