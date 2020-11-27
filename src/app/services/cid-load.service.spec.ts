import { TestBed } from '@angular/core/testing';

import { CidLoadService } from './cid-load.service';

describe('CidLoadService', () => {
  let service: CidLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CidLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
