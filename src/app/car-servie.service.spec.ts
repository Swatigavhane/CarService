import { TestBed } from '@angular/core/testing';

import { CarServieService } from './car-servie.service';

describe('CarServieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarServieService = TestBed.get(CarServieService);
    expect(service).toBeTruthy();
  });
});
