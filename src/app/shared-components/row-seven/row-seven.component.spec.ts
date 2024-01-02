import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowSevenComponent } from './row-seven.component';

describe('RowSevenComponent', () => {
  let component: RowSevenComponent;
  let fixture: ComponentFixture<RowSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
