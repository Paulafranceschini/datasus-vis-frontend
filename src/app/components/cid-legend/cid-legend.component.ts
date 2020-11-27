import { Component, OnInit } from '@angular/core';
import { CidBgColor } from 'app/enum/cid_bg_color';
import { CidFontColor } from 'app/enum/cid_font_color';
import { FilterDataModel } from 'app/models/filter-data-model';
import { RestService } from 'app/services/rest.service';


@Component({
  selector: 'app-cid-legend',
  templateUrl: './cid-legend.component.html',
  styleUrls: ['./cid-legend.component.css']
})
export class AppCidLegendComponent implements OnInit {
  cidList: any
  data: any;

  constructor(private rs: RestService) {
  }



  ngOnInit() {
    this.rs.getListCid()
      .subscribe
      (
        (response) => {
          this.cidList = response;
        },
        (error) => {
          console.log("No Data Found" + error);
        }
      )

  }

  getStyle(col) {
    let styles = {
      'backgroundColor': CidBgColor[col.cod],
      'color': CidFontColor[col.cod],
      'border': "2px solid #ffffff",
      'font-size': "12px",
      'padding': "0.75em"
    }
    return styles
  }


}


