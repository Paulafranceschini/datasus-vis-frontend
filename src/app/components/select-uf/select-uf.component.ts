import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RestService } from '../../services/rest.service'
import { Observable } from 'rxjs';
import { Uf } from '../../models/uf-model'

@Component({
  selector: 'app-select-uf',
  templateUrl: './select-uf.component.html',
  styleUrls: ['./select-uf.component.css']
})
export class SelectUfComponent implements OnInit {


  ufList : Uf[];
  ufObs : Observable<any> | undefined;

  constructor(private formBuilder: FormBuilder, private rs: RestService) { }

  ngOnInit(): void {
    this.getUfList();

  }

  async getUfList(){
   /* this.ufObs = (await this.rs.getList())
    this.ufObs.subscribe((res : any) => {
      this.ufList = res;
      console.log(this.ufList)


    });*/
  }



  ufForm = this.formBuilder.group({
    cid: [null],
  });
  get uf() {
    return this.ufForm.get('cid');
  }
 

}
