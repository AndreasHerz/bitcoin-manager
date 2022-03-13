// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    dashboard: {
      blockchain_ticker: 'https://blockchain.info/ticker'
    },
    details: {
      marketcup: 'https://blockchain.info/q/marketcap',
      totalbc: 'https://blockchain.info/q/totalbc',
      '24hrtransactioncount': 'https://blockchain.info/q/24hrtransactioncount',
      '24hrbtcsent': 'https://blockchain.info/q/24hrbtcsent',
      hashrate: 'https://blockchain.info/q/hashrate',
      getdifficulty: 'https://blockchain.info/q/getdifficulty'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
