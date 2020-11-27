import { Component, OnInit } from '@angular/core';
import { PieChartModel } from 'app/charts/models/pie-chart-model';
import { RestService } from '../../services/rest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cid-women-pie-chart',
  templateUrl: './cid-women-pie-chart.component.html',
  styleUrls: ['./cid-women-pie-chart.component.css']
})
export class CidWomenPieChartComponent implements OnInit {

  dataObs: Observable<any> | undefined;
  data: any;

  constructor(private rs: RestService) { }


  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.dataObs = (await this.rs.getCidWomenPieChartDataAsync())
    this.dataObs.subscribe((res : any) => {
      this.data = res;
    });
  }


  

}
