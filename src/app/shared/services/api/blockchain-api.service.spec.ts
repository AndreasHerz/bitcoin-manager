/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlockchainApiService } from './blockchain-api.service';

describe('Service: BlockchainApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlockchainApiService]
    });
  });

  it('should ...', inject([BlockchainApiService], (service: BlockchainApiService) => {
    expect(service).toBeTruthy();
  }));
});
