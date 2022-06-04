import { TestBed } from '@angular/core/testing';

import { ZajednicaService } from './zajednica.service';

describe('ZajednicaService', () => {
  let service: ZajednicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZajednicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});