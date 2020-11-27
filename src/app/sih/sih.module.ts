import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidWomenPieChartComponent } from './cid-women-pie-chart/cid-women-pie-chart.component';
import { ChartsModule } from '../charts/charts.module';
import { CidMenPieChartComponent } from './cid-men-pie-chart/cid-men-pie-chart.component';
import { GenderAgePyramidComponent } from './gender-age-pyramid-page/gender-age-pyramid-page.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartistModule } from 'ng-chartist';
import { ArrowListCidPageComponent } from './arrow-list-cid-page/arrow-list-cid-page.component';
import { HeatmapStateCidComponent } from './heatmap-state-cid/heatmap-state-cid.component';
import { MapCidVisComponent } from './map-cid-vis/map-cid-vis.component';
import { TimelineCidChartPageComponent } from './timeline-cid-chart-page/timeline-cid-chart-page.component';
import { McvCidComponent } from './mcv-cid/mcv-cid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module'
import { RouterModule } from '@angular/router';
import { SIHRoutes } from './sih.routing';
import { AboutSihComponent } from './about-sih/about-sih.component';
import { CidBarChartPageComponent } from './cid-bar-chart-page/cid-bar-chart-page.component'
import { SihDataListComponent } from './sih-data-list/sih-data-list.component';
import { CidListPageComponent } from './cid-list-page/cid-list-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { CidLegendComponent } from 'app/components/cid-legend/cid-legend.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CidWomenPieChartComponent,
    CidMenPieChartComponent,
    GenderAgePyramidComponent,
    ArrowListCidPageComponent,
    HeatmapStateCidComponent,
    MapCidVisComponent,
    TimelineCidChartPageComponent,
    McvCidComponent,
    AboutSihComponent,
    CidBarChartPageComponent,
    SihDataListComponent,
    CidListPageComponent],
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule.forChild(SIHRoutes),
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    FontAwesomeModule
  ],
  exports: [
    CidWomenPieChartComponent,
    CidMenPieChartComponent,
    GenderAgePyramidComponent,

  ]
})
export class SihModule { }
