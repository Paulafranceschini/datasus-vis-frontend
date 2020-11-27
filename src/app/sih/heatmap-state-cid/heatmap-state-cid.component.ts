import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RestService } from '../../services/rest.service';
import { Observable } from 'rxjs';
import { Cid } from '../../models/cid-model'
import { FilterDataModel } from 'app/models/filter-data-model';
import { TimelineDataModel } from 'app/models/timeline-data-model';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-heatmap-state-cid',
  templateUrl: './heatmap-state-cid.component.html',
  styleUrls: ['./heatmap-state-cid.component.css']
})
export class HeatmapStateCidComponent implements AfterViewInit {
 
  data: TimelineDataModel[];
  dataObs: Observable<any> | undefined;
  cidLegenda: any;
  cidList: any;
  year:any;
  //  @ViewChild(AppFiltersComponent)
//  filtersComponent:AppFiltersComponent;


  constructor(private rs: RestService) { }


  ngAfterViewInit(): void {    
  }

  onFilter(filterData: FilterDataModel){
    this.getData(filterData.year)
    this.year=filterData.year
    //this.cidList = this.filtersComponent.cids
  }

  async getData(year) {
    this.dataObs = (await this.rs.getCidLocalHeatmapData(year))
    this.dataObs.subscribe((res: any) => {
      this.data = res;
    });
  }


}
