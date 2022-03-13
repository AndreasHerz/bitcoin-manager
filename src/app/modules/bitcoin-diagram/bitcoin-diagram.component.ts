import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

import { DiagramMarketPrice } from 'src/app/shared/models/blockchain.models';

import { BcDiagramApiService } from './../../shared/services/api/bc-diagram-api.service';

@Component({
  selector: 'app-bitcoin-diagram',
  templateUrl: './bitcoin-diagram.component.html',
  styleUrls: ['./bitcoin-diagram.component.scss']
})
export class BitcoinDiagramComponent implements OnInit {
  public Highcharts: typeof Highcharts = Highcharts;
  public chartOptions: Highcharts.Options = {
    colors: [
      '#2b908f',
      '#90ee7e',
      '#f45b5b',
      '#7798BF',
      '#aaeeee',
      '#ff0066',
      '#eeaaee',
      '#55BF3B',
      '#DF5353',
      '#7798BF',
      '#aaeeee'
    ],
    chart: {
      zoomType: 'x',
      backgroundColor: 'transparent',
      style: {
        fontFamily: "'Unica One', sans-serif"
      }
    },
    title: {
      text: 'Bitcoin market value over one year',
      style: {
        color: '#E0E0E3',
        textTransform: 'uppercase',
        fontSize: '20px'
      }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        style: {
          color: '#E0E0E3'
        }
      },
      minorGridLineColor: '#505053',
      tickColor: '#707073'
    },
    yAxis: {
      title: {
        text: 'Market price [US $]',
        style: {
          color: '#A0A0A3'
        }
      },
      gridLineColor: '#707073',
      labels: {
        style: {
          color: '#E0E0E3'
        }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, '#2b908f'],
            [1, (Highcharts.color('#2b908f') as any).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
        color: '#F0F0F0'
      }
    }
  };

  constructor(private bcDiagramApi: BcDiagramApiService) {
    this.bcDiagramApi.updateMarketPrice();
  }

  ngOnInit() {
    this.bcDiagramApi.currentMarketPrice$.subscribe((data: DiagramMarketPrice | undefined) => {
      this.chartOptions = {
        ...this.chartOptions,
        series: [
          {
            type: 'area',
            name: 'USD',
            data: data?.values
          }
        ]
      };
    });
  }
}
