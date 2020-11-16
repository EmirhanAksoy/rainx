import { TestBed } from '@angular/core/testing';

import { RainxUploadService } from './rainx-upload.service';

describe('RainxUploadService', () => {
  let service: RainxUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RainxUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
