import { TestBed } from '@angular/core/testing';

import { DijagnozaService } from './dijagnoza.service';

describe('DijagnozaService', () => {
  let service: DijagnozaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DijagnozaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
