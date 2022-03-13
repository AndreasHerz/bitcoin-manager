import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, filter } from 'rxjs';
import { CurrencyCode } from 'src/app/shared/models/blockchain.enum';
import { BlockchainInfo } from 'src/app/shared/models/blockchain.models';

import { BlockchainApiService } from './../../shared/services/api/blockchain-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();

  public blockchainInfo = new Map<CurrencyCode, BlockchainInfo>();
  public currentCurrency = CurrencyCode.EUR;

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

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public refresh(): void {
    this.blockchainApi.updateBlockchainInfo();
  }

  public nextCurrency(): void {
    const currencies = Object.values(CurrencyCode);
    const currentIndex = currencies.findIndex(currency => currency === this.currentCurrency);

    this.currentCurrency = currencies[currentIndex === currencies.length - 1 ? 0 : currentIndex + 1];
  }

  public previousCurrency(): void {
    const currencies = Object.values(CurrencyCode);
    const currentIndex = currencies.findIndex(currency => currency === this.currentCurrency);

    this.currentCurrency = currencies[currentIndex === 0 ? currencies.length - 1 : currentIndex - 1];
  }
}
