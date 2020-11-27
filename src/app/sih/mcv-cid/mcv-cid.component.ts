import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
//import { AppFiltersComponent } from 'app/layouts/full/filters/filters.component';
import { FilterDataModel } from 'app/models/filter-data-model';
import { TimelineDataModel } from 'app/models/timeline-data-model';
import { RestService } from 'app/services/rest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mcv-cid',
  templateUrl: './mcv-cid.component.html',
  styleUrls: ['./mcv-cid.component.css']
})
export class McvCidComponent implements AfterViewInit {


  timelineData: TimelineDataModel[];
  heatmapData: any;
  pyramidData: any;

  dataObs: Observable<any> | undefined;
  cidLegenda: any;
  cidList: any;
  subtitle:string="";
  //@ViewChild(FiltersComponent)
  //filtersComponent: FiltersComponent;


  constructor(private rs: RestService) { }


  ngAfterViewInit(): void {
  }

  onFilter(filterData: FilterDataModel) {
    this.getData(filterData.cid, filterData.year, filterData.uf)
  }

  async getData(cid, year, state) {
    this.dataObs = (await this.rs.getMVCData(cid.cod, year, state))
    this.dataObs.subscribe((res: any) => {
      var jsonRes = JSON.parse(JSON.stringify(res))
      this.timelineData = JSON.parse(jsonRes["timeline"])
      this.heatmapData = JSON.parse(jsonRes["heatmap"]);
      this.pyramidData = JSON.parse(jsonRes["pyramid"]);
      this.subtitle = "Dados referentes a " + cid.descricao + " - " + state + "/" + year
    });
  }


}


