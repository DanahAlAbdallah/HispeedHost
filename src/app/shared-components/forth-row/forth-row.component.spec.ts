import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthRowComponent } from './forth-row.component';

describe('ForthRowComponent', () => {
  let component: ForthRowComponent;
  let fixture: ComponentFixture<ForthRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForthRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForthRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
