import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Observable } from 'rxjs';
import { FilterDataModel } from 'app/models/filter-data-model';

@Component({
  selector: 'app-arrow-list-cid-page',
  templateUrl: './arrow-list-cid-page.component.html',
  styleUrls: ['./arrow-list-cid-page.component.css']
})
export class ArrowListCidPageComponent implements OnInit {

  dataObs: Observable<any> | undefined;
  data: any;
  yearI;
  yearF;
  subtitle=""

  constructor(private rs: RestService) { }

  ngOnInit(): void {
  }

  onFilter(filterData: FilterDataModel) {
    this.yearI = filterData.yearI;
    console.log("ano inicial " + this.yearI)
    this.yearF = filterData.yearF;
    console.log("ano final " + this.yearF)

    this.getData(filterData.uf)
  }

  async getData(uf) {
    this.dataObs = (await this.rs.getArrowListCidAsync(this.yearI, this.yearF, uf))
    this.dataObs.subscribe((res : any) => {
      this.data = res;
      console.log(this.data)
      this.subtitle =  uf + " - " + this.yearI + " a " + this.yearF;

    });
  }
} 
