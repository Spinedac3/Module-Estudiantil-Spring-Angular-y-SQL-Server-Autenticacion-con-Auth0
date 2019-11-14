import { TestBed } from '@angular/core/testing';

import { CredencialesService } from './credenciales.service';

describe('CredencialesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CredencialesService = TestBed.get(CredencialesService);
    expect(service).toBeTruthy();
  });
});
