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

export interface BlockchainDetails {
  /** USD market cap (based on 24 hour weighted price) */
  marketcup: number;
  /** Total Bitcoins in circulation (delayed by up to 1 hour) */
  totalbc: number;
  /** Number of transactions in the past 24 hours */
  '24hrtransactioncount': number;
  /** Number of btc sent in the last 24 hours (in satoshi) */
  '24hrbtcsent': number;
  /** Estimated network hash rate in gigahash */
  hashrate: number;
  /** Current difficulty target as a decimal number */
  getdifficulty: number;
}
