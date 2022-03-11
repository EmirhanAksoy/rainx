import { TestBed } from '@angular/core/testing';

import { RainxPipesService } from './rainx-pipes.service';

describe('RainxPipesService', () => {
  let service: RainxPipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RainxPipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
