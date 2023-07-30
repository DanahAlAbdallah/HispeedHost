import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchflightBoxComponent } from './searchflight-box.component';

describe('SearchflightBoxComponent', () => {
  let component: SearchflightBoxComponent;
  let fixture: ComponentFixture<SearchflightBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchflightBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchflightBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
