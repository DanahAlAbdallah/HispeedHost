import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstrowComponent } from './firstrow.component';

describe('FirstrowComponent', () => {
  let component: FirstrowComponent;
  let fixture: ComponentFixture<FirstrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
