import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveRowComponent } from './five-row.component';

describe('FiveRowComponent', () => {
  let component: FiveRowComponent;
  let fixture: ComponentFixture<FiveRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
