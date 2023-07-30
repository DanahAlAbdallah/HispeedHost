import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputflightsinfoComponent } from './inputflightsinfo.component';

describe('InputflightsinfoComponent', () => {
  let component: InputflightsinfoComponent;
  let fixture: ComponentFixture<InputflightsinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputflightsinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputflightsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
