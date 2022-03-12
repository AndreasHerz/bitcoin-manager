import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { CurrencyCode } from './../../models/blockchain.enum';
import { BlockchainInfo } from './../../models/blockchain.models';

@Injectable({
  providedIn: 'root'
})
export class BlockchainApiService {
  private currentBlockchainInfo$ = new BehaviorSubject<Map<CurrencyCode, BlockchainInfo>>(
    new Map<CurrencyCode, BlockchainInfo>()
  );

  constructor(private readonly http: HttpClient) {}

  public ticker(): void {
    this.http.get(environment.api.blockchain_ticker).subscribe(
      (res: any) => {
        const newMap = new Map<CurrencyCode, BlockchainInfo>();

        Object.entries(res).forEach((entry: [string, unknown]) => {
          newMap.set(entry[0] as CurrencyCode, entry[1] as BlockchainInfo);
        });

        this.currentBlockchainInfo$.next(newMap);
      },
      (err: HttpErrorResponse) => console.error('An error occured.', err)
    );
  }
}
