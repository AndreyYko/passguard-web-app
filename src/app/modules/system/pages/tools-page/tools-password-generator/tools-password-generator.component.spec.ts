import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsPasswordGeneratorComponent } from './tools-password-generator.component';

describe('ToolsPasswordGeneratorComponent', () => {
  let component: ToolsPasswordGeneratorComponent;
  let fixture: ComponentFixture<ToolsPasswordGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsPasswordGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsPasswordGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
