import { Routes } from '@angular/router';
import { CidWomenPieChartComponent } from './cid-women-pie-chart/cid-women-pie-chart.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SihDataListComponent } from './sih-data-list/sih-data-list.component'
export const SIHRoutes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'sihdatalist',
  component: SihDataListComponent
}

];
