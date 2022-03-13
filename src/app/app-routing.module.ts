import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    pathMatch: 'full'
  },
  {
    path: 'details',
    loadChildren: () => import('./modules/bitcoin-details/bitcoin-details.module').then(m => m.BitcoinDetailsModule),
    pathMatch: 'full'
  },
  {
    path: 'converter',
    loadChildren: () =>
      import('./modules/bitcoin-converter/bitcoin-converter.module').then(m => m.BitcoinConverterModule),
    pathMatch: 'full'
  },
  {
    path: 'diagram',
    loadChildren: () => import('./modules/bitcoin-diagram/bitcoin-diagram.module').then(m => m.BitcoinDiagramModule),
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
