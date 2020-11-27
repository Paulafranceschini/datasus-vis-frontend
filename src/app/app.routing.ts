import { Routes } from '@angular/router';
import { HeatmapComponent } from './charts/heatmap/heatmap.component';

import { FullComponent } from './layouts/full/full.component';
import { ArrowListCidPageComponent } from './sih/arrow-list-cid-page/arrow-list-cid-page.component';
import { CidMenPieChartComponent } from './sih/cid-men-pie-chart/cid-men-pie-chart.component';
import { CidWomenPieChartComponent } from './sih/cid-women-pie-chart/cid-women-pie-chart.component';
import { GenderAgePyramidComponent } from './sih/gender-age-pyramid-page/gender-age-pyramid-page.component';
import { HeatmapStateCidComponent } from './sih/heatmap-state-cid/heatmap-state-cid.component';
import { MapCidVisComponent } from './sih/map-cid-vis/map-cid-vis.component';
import { McvCidComponent } from './sih/mcv-cid/mcv-cid.component';
import { TimelineCidChartPageComponent } from './sih/timeline-cid-chart-page/timeline-cid-chart-page.component';
import { DashboardComponent } from './sih/dashboard/dashboard.component';
import { CidBarChartPageComponent } from './sih/cid-bar-chart-page/cid-bar-chart-page.component';
import { CidListPageComponent } from './sih/cid-list-page/cid-list-page.component'
import { AboutSihComponent } from './sih/about-sih/about-sih.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/about_sih',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: '',
        loadChildren:
          () => import('./sih/sih.module').then(m => m.SihModule)
      },
      {
        path: 'dashboard', component: DashboardComponent,
        loadChildren: () => import('./sih/sih.module').then(m => m.SihModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)
      },
      { path: 'cid_list', component: CidListPageComponent },

      { path: 'cid_bar_chart', component: CidBarChartPageComponent },
      { path: 'cid_women_pie_chart', component: CidWomenPieChartComponent },
      { path: 'cid_men_pie_chart', component: CidMenPieChartComponent },
      { path: 'gender_age_pyramid', component: GenderAgePyramidComponent },
      { path: 'arrow_list_cid', component: ArrowListCidPageComponent },
      { path: 'heatmap_cid_uf', component: HeatmapStateCidComponent },
      { path: 'map_cid_vis', component: MapCidVisComponent },
      { path: 'timeline_cid_chart', component: TimelineCidChartPageComponent },
      { path: 'mcv_incidence', component: McvCidComponent},
      { path: 'about_sih', component:AboutSihComponent }




    ]
  }
]; 
