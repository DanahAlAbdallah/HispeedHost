import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftersearchitemComponent } from './aftersearchitem.component';

describe('AftersearchitemComponent', () => {
  let component: AftersearchitemComponent;
  let fixture: ComponentFixture<AftersearchitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AftersearchitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AftersearchitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
