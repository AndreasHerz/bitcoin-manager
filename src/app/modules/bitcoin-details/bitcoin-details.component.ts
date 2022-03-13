import { Component, OnInit } from '@angular/core';

import { BcDetailsApiService } from './../../shared/services/api/bc-details-api.service';

@Component({
  selector: 'app-bitcoin-details',
  templateUrl: './bitcoin-details.component.html',
  styleUrls: ['./bitcoin-details.component.scss']
})
export class BitcoinDetailsComponent implements OnInit {
  constructor(private bcDetailsApi: BcDetailsApiService) {
    this.bcDetailsApi.updateBlockchainInfo();
  }

  ngOnInit() {
    this.bcDetailsApi.currentBlockchainInfo$.subscribe(el => console.log(el));
  }

  public refresh(): void {
    this.bcDetailsApi.updateBlockchainInfo();
  }
}
