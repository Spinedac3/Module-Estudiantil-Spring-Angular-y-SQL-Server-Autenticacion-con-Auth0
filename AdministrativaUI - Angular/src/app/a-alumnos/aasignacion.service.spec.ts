import { TestBed } from '@angular/core/testing';

import { AasignacionService } from './aasignacion.service';

describe('AasignacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AasignacionService = TestBed.get(AasignacionService);
    expect(service).toBeTruthy();
  });
});
