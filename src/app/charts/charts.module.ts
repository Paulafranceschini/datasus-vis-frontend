import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsComponent } from './charts.component';
import { ChartistModule } from 'ng-chartist';
import { PyramidChartComponent } from './pyramid-chart/pyramid-chart.component';
import { TimelineChartComponent } from './timeline-chart/timeline-chart.component';

import { DashboardTimelineChartComponent } from './dashboard-timeline-chart/dashboard-timeline-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ArrowListChartComponent } from './arrow-list-chart/arrow-list-chart.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { PyramidMultiDataComponent } from './pyramid-multi-data/pyramid-multi-data.component';
import { MapComponent } from './map/map.component';
import { MultipleCoordinatedViewComponent } from './multiple-coordinated-view/multiple-coordinated-view.component';
import { MultiBarChartComponent } from './multi-bar-chart/multi-bar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
  ],
  declarations: [
    ChartsComponent, 
    PyramidChartComponent, 
    TimelineChartComponent, 
    PieChartComponent, 
    ArrowListChartComponent, 
    HeatmapComponent, 
    PyramidMultiDataComponent, 
    MapComponent, 
    MultipleCoordinatedViewComponent, 
    DashboardTimelineChartComponent, 
    CidScatterplotComponent, 
    MultiBarChartComponent, 
  ],
  exports:[
    PyramidChartComponent,
    PieChartComponent,
    ArrowListChartComponent,
    HeatmapComponent,
    MapComponent,
    TimelineChartComponent,
    DashboardTimelineChartComponent,
    MultipleCoordinatedViewComponent,
    MultiBarChartComponent
  ]
    
})
export class ChartsModule {}
