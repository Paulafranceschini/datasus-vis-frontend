import { Component, OnInit } from '@angular/core';
import { FilterDataModel } from 'app/models/filter-data-model';
import { RestService } from 'app/services/rest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cid-bar-chart-page',
  templateUrl: './cid-bar-chart-page.component.html',
  styleUrls: ['./cid-bar-chart-page.component.css']
})
export class CidBarChartPageComponent implements OnInit {

  dataObs: Observable<any> | undefined;
  data: any;
  subtitle:string="";

  constructor(private rs: RestService) { }

  ngOnInit(): void {
  }

  onFilter(filterData: FilterDataModel) {
    this.getData(filterData.year, filterData.uf, filterData.codSelection)
  }

  async getData(year, uf, cid) {
    this.dataObs = (await this.rs.getDiagGenderData(year, uf, cid))
    this.dataObs.subscribe((res: any) => {
      this.data = res;
      this.subtitle = "Dados referentes a: " + uf + "/" + year
    });

  }
}
