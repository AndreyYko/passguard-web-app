import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemCardFormComponent } from './add-item-card-form.component';

describe('AddItemCardFormComponent', () => {
  let component: AddItemCardFormComponent;
  let fixture: ComponentFixture<AddItemCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
