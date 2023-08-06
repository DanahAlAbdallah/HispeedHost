import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrismVisaComponent } from './torrism-visa.component';

describe('TorrismVisaComponent', () => {
  let component: TorrismVisaComponent;
  let fixture: ComponentFixture<TorrismVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorrismVisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorrismVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
