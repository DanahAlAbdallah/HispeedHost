import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpcialPackageItemComponent } from './spcial-package-item.component';

describe('SpcialPackageItemComponent', () => {
  let component: SpcialPackageItemComponent;
  let fixture: ComponentFixture<SpcialPackageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpcialPackageItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpcialPackageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
