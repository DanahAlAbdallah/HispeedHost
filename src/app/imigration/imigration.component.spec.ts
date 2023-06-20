import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImigrationComponent } from './imigration.component';

describe('ImigrationComponent', () => {
  let component: ImigrationComponent;
  let fixture: ComponentFixture<ImigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImigrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
