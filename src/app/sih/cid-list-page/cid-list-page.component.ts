import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CidBgColor } from 'app/enum/cid_bg_color';
import { CidFontColor } from 'app/enum/cid_font_color';
import { RestService } from 'app/services/rest.service';
import { AttributeDialogComponent } from '../sih-data-list/attribute-dialog/attribute-dialog.component';

@Component({
  selector: 'app-cid-list-page',
  templateUrl: './cid-list-page.component.html',
  styleUrls: ['./cid-list-page.component.css']
})
export class CidListPageComponent implements OnInit {


  data: any;

  constructor(private rs: RestService, private dialog: MatDialog) {
  }



  ngOnInit() {


    this.rs.getListCid()
      .subscribe
      (
        (response) => {

          this.data = response;

        },
        (error) => {
          console.log("No Data Found" + error);
        }
      )

  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(AttributeDialogComponent, dialogConfig);
  }

  getStyle(col){
    let styles = {
      'backgroundColor': CidBgColor[col.cod],
      'color': CidFontColor[col.cod],
      'border': "2px solid #ffffff",
      'font-size': "12px"
    }
    return styles
  }
  

}

