import { TestBed } from '@angular/core/testing';

import { CommonapiService } from './commonapiservice.service';

describe('CommonapiService', () => {
  let service: CommonapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
