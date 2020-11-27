import { Component, OnInit } from '@angular/core';
import { PieChartModel } from 'app/charts/models/pie-chart-model';
import { RestService } from '../../services/rest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cid-men-pie-chart',
  templateUrl: './cid-men-pie-chart.component.html',
  styleUrls: ['./cid-men-pie-chart.component.css']
})
export class CidMenPieChartComponent implements OnInit {

 
  dataObs: Observable<any> | undefined;
  data: any;
  ok = false;

  constructor(private rs: RestService) { }


  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.dataObs = (await this.rs.getCidMenPieChartDataAsync())
    this.dataObs.subscribe((res : any) => {
      this.data = res;
    });
  }


  

}
