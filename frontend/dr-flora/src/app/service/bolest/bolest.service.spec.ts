import { TestBed } from '@angular/core/testing';

import { BolestService } from './bolest.service';

describe('BolestService', () => {
  let service: BolestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BolestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
