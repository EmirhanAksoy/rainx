import { TestBed } from '@angular/core/testing';

import { RainxKeyboardService } from './rainx-keyboard.service';

describe('RainxKeyboardService', () => {
  let service: RainxKeyboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RainxKeyboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
