import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, auditTime } from 'rxjs';
import { environment } from 'src/environments/environment';

import { BlockchainDetails } from './../../models/blockchain.models';

@Injectable({
  providedIn: 'root'
})
export class BcDetailsApiService {
  private _currentBlockchainInfo$ = new BehaviorSubject<BlockchainDetails | undefined>(undefined);
  public currentBlockchainInfo$ = this._currentBlockchainInfo$.asObservable().pipe(auditTime(100));

  constructor(private readonly http: HttpClient) {}

  public updateBlockchainInfo() {
    this.update24HrBtcSent();
    this.update24HrTransactionCount();
    this.updateGetDifficulty();
    this.updateHashrate();
    this.updateMarketcup();
    this.updateTotalBc();
  }

  private update24HrBtcSent(): void {
    this.http.get<number>(environment.api.details['24hrbtcsent']).subscribe(
      (res: number) =>
        this._currentBlockchainInfo$.next({
          ...this._currentBlockchainInfo$.getValue(),
          '24hrbtcsent': res
        } as BlockchainDetails),
      (err: HttpErrorResponse) => console.error('An error occured.', err)
    );
  }

  private update24HrTransactionCount(): void {
    this.http.get<number>(environment.api.details['24hrtransactioncount']).subscribe(
      (res: number) =>
        this._currentBlockchainInfo$.next({
          ...this._currentBlockchainInfo$.getValue(),
          '24hrtransactioncount': res
        } as BlockchainDetails),
      (err: HttpErrorResponse) => console.error('An error occured.', err)
    );
  }

  private updateGetDifficulty(): void {
    this.http.get<number>(environment.api.details.getdifficulty).subscribe(
      (res: number) =>
        this._currentBlockchainInfo$.next({
          ...this._currentBlockchainInfo$.getValue(),
          getdifficulty: res
        } as BlockchainDetails),
      (err: HttpErrorResponse) => console.error('An error occured.', err)
    );
  }

  private updateHashrate(): void {
    this.http.get<number>(environment.api.details.hashrate).subscribe(
      (res: number) =>
        this._currentBlockchainInfo$.next({
          ...this._currentBlockchainInfo$.getValue(),
          hashrate: res
        } as BlockchainDetails),
      (err: HttpErrorResponse) => console.error('An error occured.', err)
    );
  }

  private updateMarketcup(): void {
    this.http.get<number>(environment.api.details.marketcup).subscribe(
      (res: number) =>
        this._currentBlockchainInfo$.next({
          ...this._currentBlockchainInfo$.getValue(),
          marketcup: res
        } as BlockchainDetails),
      (err: HttpErrorResponse) => console.error('An error occured.', err)
    );
  }

  private updateTotalBc(): void {
    this.http.get<number>(environment.api.details.totalbc).subscribe(
      (res: number) =>
        this._currentBlockchainInfo$.next({
          ...this._currentBlockchainInfo$.getValue(),
          totalbc: res
        } as BlockchainDetails),
      (err: HttpErrorResponse) => console.error('An error occured.', err)
    );
  }
}
