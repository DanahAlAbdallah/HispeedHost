import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentprogramComponent } from './studentprogram.component';

describe('StudentprogramComponent', () => {
  let component: StudentprogramComponent;
  let fixture: ComponentFixture<StudentprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentprogramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
