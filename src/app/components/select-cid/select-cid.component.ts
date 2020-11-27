import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Cid } from 'app/models/cid-model';
import { RestService } from '../../services/rest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-select-cid',
  templateUrl: './select-cid.component.html',
  styleUrls: ['./select-cid.component.css']
})
export class SelectCidComponent implements OnInit {
  cidList : Cid[];
  cidObs : Observable<any> | undefined;

  constructor(private formBuilder: FormBuilder, private rs: RestService) { }

  ngOnInit(): void {
  }

  onCidChange() {
  }

  cidForm = this.formBuilder.group({
    cid: [null],
  });

  get cid() {
    return this.cidForm.get('cid');
  }

  async getCidList(){
    this.cidObs = (await this.rs.getListCid())
    this.cidObs.subscribe((res : any) => {
      this.cidList = res;
    });
  }




}
