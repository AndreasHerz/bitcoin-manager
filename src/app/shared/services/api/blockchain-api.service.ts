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
  private _currentBlockchainInfo$ = new BehaviorSubject<Map<CurrencyCode, BlockchainInfo>>(
    new Map<CurrencyCode, BlockchainInfo>()
  );
  public currentBlockchainInfo$ = this._currentBlockchainInfo$.asObservable();

  constructor(private readonly http: HttpClient) {}

  public updateBlockchainInfo(): void {
    this.http.get(environment.api.blockchain_ticker).subscribe(
      (res: any) => {
        const newMap = new Map<CurrencyCode, BlockchainInfo>();

        Object.entries(res).forEach((entry: [string, unknown]) => {
          newMap.set(entry[0] as CurrencyCode, entry[1] as BlockchainInfo);
        });

        this._currentBlockchainInfo$.next(newMap);
      },
      (err: HttpErrorResponse) => console.error('An error occured.', err)
    );
  }
}
