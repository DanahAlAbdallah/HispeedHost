import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularimageComponent } from './circularimage.component';

describe('CircularimageComponent', () => {
  let component: CircularimageComponent;
  let fixture: ComponentFixture<CircularimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircularimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircularimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
