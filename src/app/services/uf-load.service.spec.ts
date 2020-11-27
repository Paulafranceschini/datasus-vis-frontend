import { TestBed } from '@angular/core/testing';

import { UfLoadService } from './uf-load.service';

describe('UfLoadService', () => {
  let service: UfLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UfLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
