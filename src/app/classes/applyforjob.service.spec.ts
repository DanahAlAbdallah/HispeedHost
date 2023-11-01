import { TestBed } from '@angular/core/testing';

import { ApplyforjobService } from './applyforjob.service';

describe('ApplyforjobService', () => {
  let service: ApplyforjobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyforjobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
