import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemPopUpComponent } from './add-item-pop-up.component';

describe('AddItemPopUpComponent', () => {
  let component: AddItemPopUpComponent;
  let fixture: ComponentFixture<AddItemPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
