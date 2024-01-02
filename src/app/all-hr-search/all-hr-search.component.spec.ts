import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHrSearchComponent } from './all-hr-search.component';

describe('AllHrSearchComponent', () => {
  let component: AllHrSearchComponent;
  let fixture: ComponentFixture<AllHrSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllHrSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllHrSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
