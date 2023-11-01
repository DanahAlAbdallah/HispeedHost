import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixRowComponent } from './six-row.component';

describe('SixRowComponent', () => {
  let component: SixRowComponent;
  let fixture: ComponentFixture<SixRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
