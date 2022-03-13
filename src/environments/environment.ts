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
    },
    diagram: {
      marketPrice:
        'https://api.blockchain.info/charts/market-price?timespan=1years&rollingAverage=1days&format=json&cors=true'
    }
  }
};
