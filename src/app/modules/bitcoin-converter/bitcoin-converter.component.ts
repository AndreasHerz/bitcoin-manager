import { Component, OnInit } from '@angular/core';

import { Subscription, filter } from 'rxjs';
import { CurrencyCode } from 'src/app/shared/models/blockchain.enum';
import { BlockchainInfo } from 'src/app/shared/models/blockchain.models';

import { BlockchainApiService } from './../../shared/services/api/blockchain-api.service';

@Component({
  selector: 'app-bitcoin-converter',
  templateUrl: './bitcoin-converter.component.html',
  styleUrls: ['./bitcoin-converter.component.scss']
})
export class BitcoinConverterComponent implements OnInit {
  private subscriptions: Subscription = new Subscription();
  private blockchainInfo = new Map<CurrencyCode, BlockchainInfo>();

  public value: number | undefined = undefined;
  public availableCurrencies = [
    CurrencyCode.EUR,
    CurrencyCode.USD,
    CurrencyCode.AUD,
    CurrencyCode.NZD,
    CurrencyCode.GBP
  ];
  public selectedCurrency = CurrencyCode.EUR;
  public result: number | undefined = undefined;

  constructor(private blockchainApi: BlockchainApiService) {
    this.blockchainApi.updateBlockchainInfo();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.blockchainApi.currentBlockchainInfo$
        .pipe(filter((info: Map<CurrencyCode, BlockchainInfo>) => info.size > 0))
        .subscribe((info: Map<CurrencyCode, BlockchainInfo>) => {
          this.blockchainInfo = info;
        })
    );
  }

  public convertToBitcoin = (): number | undefined =>
    this.value && this.blockchainInfo.get(this.selectedCurrency)?.buy
      ? (1 / this.blockchainInfo.get(this.selectedCurrency)!.buy) * this.value
      : undefined;
}
