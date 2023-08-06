import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataSharedComponent } from './form-data-shared.component';

describe('FormDataSharedComponent', () => {
  let component: FormDataSharedComponent;
  let fixture: ComponentFixture<FormDataSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDataSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDataSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
