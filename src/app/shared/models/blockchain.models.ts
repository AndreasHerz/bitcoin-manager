import { CurrencyCode } from './blockchain.enum';

export interface BlockchainInfo {
  /** 15 minutes delayed market price */
  '15m': number;
  /** the most recent market price */
  last: number;
  /** current buy price */
  buy: number;
  /** current sell price */
  sell: number;
  /** currency symbol */
  symbol: CurrencyCode;
}
