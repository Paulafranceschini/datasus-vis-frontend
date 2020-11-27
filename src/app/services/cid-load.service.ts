import { Injectable } from '@angular/core';
import { Cid } from '../models/cid-model';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class CidLoadService {

  public cidList: Cid[];

  constructor(private rs: RestService) {
  }

  load(): Promise<Cid[]> {

    const promise = this.rs.getListCid().toPromise().then(
      (data: Cid[]) => {
        this.cidList = data;
        return data;
      });
    return promise;
  }


}
