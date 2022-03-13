import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';

import { BitcoinDetailsComponent } from './bitcoin-details.component';

const routes: Routes = [
  {
    path: '',
    component: BitcoinDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BitcoinDetailsComponent]
})
export class BitcoinDetailsModule {}
