import { TestBed } from '@angular/core/testing';

import { CelestialServiceService } from './celestial-service.service';

describe('CelestialServiceService', () => {
  let service: CelestialServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelestialServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
