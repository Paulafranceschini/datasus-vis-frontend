import { Injectable } from '@angular/core';
import { Uf } from 'app/models/uf-model';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class UfLoadService {

  public ufList: Uf[];

  constructor(private rs: RestService) {
    console.log("uf-load-service")
  }

  load(): Promise<Uf[]> {

    const promise = this.rs.getListUf().toPromise().then(
      (data: Uf[]) => {
        this.ufList = data;
        return data;
      });
    return promise;
  }


}
