import { TestBed } from '@angular/core/testing';

import { NotasService } from './notas.service';

describe('NotasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotasService = TestBed.get(NotasService);
    expect(service).toBeTruthy();
  });
});
