import { TestBed } from '@angular/core/testing';

import { ImigrationService } from './imigration.service';

describe('ImigrationService', () => {
  let service: ImigrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImigrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
