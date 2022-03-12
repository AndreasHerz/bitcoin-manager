import { Component, OnInit } from '@angular/core';

import { BlockchainApiService } from './../../shared/services/api/blockchain-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private blockchainApi: BlockchainApiService) {}

  ngOnInit() {
    this.blockchainApi.ticker();
  }
}
