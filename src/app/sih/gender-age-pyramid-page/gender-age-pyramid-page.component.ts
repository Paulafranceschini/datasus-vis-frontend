import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Observable } from 'rxjs';
import { FilterDataModel } from 'app/models/filter-data-model';

@Component({
  selector: 'app-gender-age-pyramid-page',
  templateUrl: './gender-age-pyramid-page.component.html',
  styleUrls: ['./gender-age-pyramid-page.component.css']
})

export class GenderAgePyramidComponent implements OnInit {


  dataObs: Observable<any> | undefined;
  data: any;
  subtitle:string = "";
  constructor(private rs: RestService) { }


  ngOnInit(): void {
//    this.getData();
  }

  onFilter(filterData: FilterDataModel){
    console.log("aqui => " + filterData.cid)
    this.getData(filterData.year, filterData.uf, filterData.cid)
  }

  async getData(year, uf, cid) {
    this.dataObs = (await this.rs.getGenderAgePyramidData(year, uf, cid.cod))
    this.dataObs.subscribe((res: any) => {
      this.data = res;
      this.subtitle = cid.descricao + " - " + uf + "/" + year;
    });
  }




}
