import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WemakeTourComponent } from './wemake-tour.component';

describe('WemakeTourComponent', () => {
  let component: WemakeTourComponent;
  let fixture: ComponentFixture<WemakeTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WemakeTourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WemakeTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
