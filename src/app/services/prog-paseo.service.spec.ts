import { TestBed } from '@angular/core/testing';

import { ProgPaseoService } from './prog-paseo.service';

describe('ProgPaseoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgPaseoService = TestBed.get(ProgPaseoService);
    expect(service).toBeTruthy();
  });
});
