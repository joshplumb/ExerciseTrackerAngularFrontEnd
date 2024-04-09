import { TestBed } from '@angular/core/testing';

import { GetPutPostDeleteService } from './get-put-post-delete.service';

describe('GetPutPostDeleteService', () => {
  let service: GetPutPostDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPutPostDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
