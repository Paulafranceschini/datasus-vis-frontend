import { Injectable } from '@angular/core';
import { Cid } from 'app/models/cid-model';
import { Uf } from 'app/models/uf-model';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterFormService {
  private mySubject = new BehaviorSubject<FilterModel[]>([]);

  allObservable: Observable<FilterModel[]> = this.mySubject.asObservable();

  selectedObservable = this.allObservable.pipe(
    tap(_ => console.log('SelectedObservable Ran')),
    map(result => result)
  );

  constructor() { }

  setUpdatedData(data){
    this.mySubject.next(data);
  }
}
  export interface FilterModel {
    cid : Cid | undefined;
    cidSelection : Cid[] | undefined;
    uf: Uf;
    year: number;
  }

