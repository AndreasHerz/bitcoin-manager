/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';

import { BcDiagramApiService } from './bc-diagram-api.service';

describe('Service: BcDiagramApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BcDiagramApiService]
    });
  });

  it('should ...', inject([BcDiagramApiService], (service: BcDiagramApiService) => {
    expect(service).toBeTruthy();
  }));
});
