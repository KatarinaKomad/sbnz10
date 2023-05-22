import { TestBed } from '@angular/core/testing';

import { SimptomService } from './simptom.service';

describe('SimptomService', () => {
  let service: SimptomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimptomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
