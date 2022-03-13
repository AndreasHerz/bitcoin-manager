import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';

import { DiagramMarketPrice } from './../../models/blockchain.models';

@Injectable({
  providedIn: 'root'
})
export class BcDiagramApiService {
  private _currentMarketPrice$ = new BehaviorSubject<DiagramMarketPrice | undefined>(undefined);
  public currentMarketPrice$ = this._currentMarketPrice$.asObservable();

  constructor(private readonly http: HttpClient) {}

  public updateMarketPrice(): void {
    this.http
      .get<DiagramMarketPrice>(environment.api.diagram.marketPrice)
      .pipe(map(el => ({ ...el, values: el.values.map(val => ({ ...val, x: (val.x = val.x * 1000) })) })))
      .subscribe(
        (res: DiagramMarketPrice) => this._currentMarketPrice$.next(res),
        (err: HttpErrorResponse) => console.error('An error occured.', err)
      );
  }

  public getData = () => this._currentMarketPrice$.getValue()?.values;
}
