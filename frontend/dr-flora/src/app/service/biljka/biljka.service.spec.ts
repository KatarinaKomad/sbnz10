import { TestBed } from '@angular/core/testing';

import { BiljkaService } from './biljka.service';

describe('BiljkaService', () => {
  let service: BiljkaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiljkaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
