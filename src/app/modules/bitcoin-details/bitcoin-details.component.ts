import { Component, OnInit } from '@angular/core';

import { filter } from 'rxjs';
import { BlockchainDetails } from 'src/app/shared/models/blockchain.models';

import { BcDetailsApiService } from './../../shared/services/api/bc-details-api.service';

@Component({
  selector: 'app-bitcoin-details',
  templateUrl: './bitcoin-details.component.html',
  styleUrls: ['./bitcoin-details.component.scss']
})
export class BitcoinDetailsComponent implements OnInit {
  public details?: BlockchainDetails;

  constructor(private bcDetailsApi: BcDetailsApiService) {
    this.bcDetailsApi.updateBlockchainInfo();
  }

  ngOnInit() {
    this.bcDetailsApi.currentBlockchainInfo$
      .pipe(filter<BlockchainDetails | undefined>(Boolean))
      .subscribe((details: BlockchainDetails) => (this.details = details));
  }

  public refresh(): void {
    this.bcDetailsApi.updateBlockchainInfo();
  }
}
