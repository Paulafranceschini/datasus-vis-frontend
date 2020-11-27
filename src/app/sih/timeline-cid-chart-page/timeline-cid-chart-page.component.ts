import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, } from '@angular/core';
//import { AppFiltersComponent } from 'app/components/filters/filters.component';
import { FilterDataModel } from 'app/models/filter-data-model';
import { RestService } from 'app/services/rest.service';
import { Observable } from 'rxjs';
import { TimelineDataModel } from '../../models/timeline-data-model'
@Component({
  selector: 'app-timeline-cid-chart-page',
  templateUrl: './timeline-cid-chart-page.component.html',
  styleUrls: ['./timeline-cid-chart-page.component.css']
})
export class TimelineCidChartPageComponent implements AfterViewInit {

  data: TimelineDataModel[];
  dataObs: Observable<any> | undefined;
  cidLegenda: any;
  cidList: any;
  //@ViewChild(FiltersComponent)
  //filtersComponent:FiltersComponent;


  constructor(private rs: RestService) { }


  ngAfterViewInit(): void {
    //this.cidList = this.filtersComponent.cidSelection
  }

  onFilter(filterData: FilterDataModel) {
    this.getData(filterData.codSelection, filterData.year, filterData.uf)
    //this.cidList = this.filtersComponent.cidSelection
    //console.log("cid list aqui = " + this.cidList)
  }

  async getData(cidCods, year, state) {
    this.dataObs = (await this.rs.getTimelineData(cidCods, year, state))
    this.dataObs.subscribe((res: any) => {
      this.data = res;
      console.log(this.data)
    });
  }


}
