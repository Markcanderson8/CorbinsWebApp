import { TestBed } from '@angular/core/testing';

import { PressesService } from './presses.service';

describe('PressesService', () => {
  let service: PressesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PressesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
