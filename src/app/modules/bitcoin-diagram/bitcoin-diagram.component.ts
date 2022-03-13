import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

import { BcDiagramApiService } from './../../shared/services/api/bc-diagram-api.service';

@Component({
  selector: 'app-bitcoin-diagram',
  templateUrl: './bitcoin-diagram.component.html',
  styleUrls: ['./bitcoin-diagram.component.scss']
})
export class BitcoinDiagramComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      zoomType: 'x'
    },
    title: {
      text: 'Market value over a year'
    },
    subtitle: {
      text:
        document.ontouchstart === undefined
          ? 'Click and drag in the plot area to zoom in'
          : 'Pinch the chart to zoom in'
    },
    xAxis: {
      type: 'datetime'
    },
    yAxis: {
      title: {
        text: 'Exchange rate'
      }
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
            [0, Highcharts.getOptions().colors![0]],
            [1, (Highcharts.color(Highcharts.getOptions().colors![0]) as any).setOpacity(0).get('rgba')]
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
    }
  };

  constructor(private bcDiagramApi: BcDiagramApiService) {
    this.bcDiagramApi.updateMarketPrice();
  }

  ngOnInit() {
    this.bcDiagramApi.currentMarketPrice$.subscribe(data => {
      this.chartOptions = {
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
          text: 'Bitcoin market value over a year',
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
                [0, Highcharts.getOptions().colors![0]],
                [1, (Highcharts.color(Highcharts.getOptions().colors![0]) as any).setOpacity(0).get('rgba')]
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
        },
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
