import { TestBed } from '@angular/core/testing';

import { PreparatService } from './preparat.service';

describe('PreparatService', () => {
  let service: PreparatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreparatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
