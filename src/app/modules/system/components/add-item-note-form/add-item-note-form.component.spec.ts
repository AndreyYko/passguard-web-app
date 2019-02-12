import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemNoteFormComponent } from './add-item-note-form.component';

describe('AddItemNoteFormComponent', () => {
  let component: AddItemNoteFormComponent;
  let fixture: ComponentFixture<AddItemNoteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemNoteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemNoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
