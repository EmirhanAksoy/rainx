import { TestBed } from '@angular/core/testing';

import { RainxListboxService } from './rainx-listbox.service';

describe('RainxListboxService', () => {
  let service: RainxListboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RainxListboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
