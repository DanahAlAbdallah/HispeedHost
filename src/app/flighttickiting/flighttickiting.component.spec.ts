import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlighttickitingComponent } from './flighttickiting.component';

describe('FlighttickitingComponent', () => {
  let component: FlighttickitingComponent;
  let fixture: ComponentFixture<FlighttickitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlighttickitingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlighttickitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
