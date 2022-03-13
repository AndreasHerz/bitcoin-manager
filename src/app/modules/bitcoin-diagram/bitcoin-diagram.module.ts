import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';

import { HighchartsChartModule } from 'highcharts-angular';

import { BitcoinDiagramComponent } from './bitcoin-diagram.component';

const routes: Routes = [
  {
    path: '',
    component: BitcoinDiagramComponent
  }
];

@NgModule({
  imports: [CommonModule, MatCardModule, HighchartsChartModule, RouterModule.forChild(routes)],
  declarations: [BitcoinDiagramComponent]
})
export class BitcoinDiagramModule {}
