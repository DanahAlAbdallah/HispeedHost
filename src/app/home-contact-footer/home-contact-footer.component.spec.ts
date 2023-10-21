import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContactFooterComponent } from './home-contact-footer.component';

describe('HomeContactFooterComponent', () => {
  let component: HomeContactFooterComponent;
  let fixture: ComponentFixture<HomeContactFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeContactFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeContactFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
