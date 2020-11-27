import { Cid } from 'app/models/cid-model';
import { Uf } from 'app/models/uf-model';

export class FilterDataModel {
    cid : any;
    cidSelection : any;
    codSelection: string[];
    uf: Uf;
    year: number;
    yearI:number;
    yearF:number;
  }