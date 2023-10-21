import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsItemComponent } from './testimonials-item.component';

describe('TestimonialsItemComponent', () => {
  let component: TestimonialsItemComponent;
  let fixture: ComponentFixture<TestimonialsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
