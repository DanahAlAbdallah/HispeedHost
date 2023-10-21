import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhowearesectionComponent } from './whowearesection.component';

describe('WhowearesectionComponent', () => {
  let component: WhowearesectionComponent;
  let fixture: ComponentFixture<WhowearesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhowearesectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhowearesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
