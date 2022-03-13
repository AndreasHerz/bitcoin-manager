/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';

import { BcDetailsApiService } from './bc-details-api.service';

describe('Service: BcDetailsApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BcDetailsApiService]
    });
  });

  it('should ...', inject([BcDetailsApiService], (service: BcDetailsApiService) => {
    expect(service).toBeTruthy();
  }));
});
