import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchflightResultsComponent } from './searchflight-results.component';

describe('SearchflightResultsComponent', () => {
  let component: SearchflightResultsComponent;
  let fixture: ComponentFixture<SearchflightResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchflightResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchflightResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
