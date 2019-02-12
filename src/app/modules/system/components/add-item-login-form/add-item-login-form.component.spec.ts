import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemLoginFormComponent } from './add-item-login-form.component';

describe('AddItemLoginFormComponent', () => {
  let component: AddItemLoginFormComponent;
  let fixture: ComponentFixture<AddItemLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
