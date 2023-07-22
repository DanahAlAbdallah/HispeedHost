import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftersearchComponent } from './aftersearch.component';

describe('AftersearchComponent', () => {
  let component: AftersearchComponent;
  let fixture: ComponentFixture<AftersearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AftersearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AftersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
