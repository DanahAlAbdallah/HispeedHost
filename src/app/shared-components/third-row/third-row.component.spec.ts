import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdRowComponent } from './third-row.component';

describe('ThirdRowComponent', () => {
  let component: ThirdRowComponent;
  let fixture: ComponentFixture<ThirdRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
