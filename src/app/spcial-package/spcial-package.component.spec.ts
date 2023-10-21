import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpcialPackageComponent } from './spcial-package.component';

describe('SpcialPackageComponent', () => {
  let component: SpcialPackageComponent;
  let fixture: ComponentFixture<SpcialPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpcialPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpcialPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
