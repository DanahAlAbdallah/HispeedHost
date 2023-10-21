import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsSection1Component } from './forms-section1.component';

describe('FormsSection1Component', () => {
  let component: FormsSection1Component;
  let fixture: ComponentFixture<FormsSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsSection1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
