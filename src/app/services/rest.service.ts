import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PieData } from '../pieData';
import { Atributo } from '../models/atributo'
import { GenderAgeChart } from '../models/genderAgeChart';
import { PieChartModel } from '../charts/models/pie-chart-model';
import { Cid } from '../models/cid-model';
import { Uf } from '../models/uf-model';


@Injectable({
  providedIn: 'root'
})
export class RestService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  //url : string = "https://tcc-datasus-289918.ue.r.appspot.com/"
  url: string = "http://localhost:8080/"
  //url: string = "http://35.233.188.241:8080/"

  async getCidWomenPieChartDataAsync() {
    const params = new HttpParams()
      .set('total', '10')

    console.log("getCidWomenPieChartDataAsync")
    var data = await this.http.get<PieChartModel[]>(this.url + "cid_women_pie_data", { params });
    console.log(data);
    return data;
  }

  async getCidMenPieChartDataAsync() {
    const params = new HttpParams()
      .set('total', '10')

    console.log("getCidMenPieChartDataAsync")

    var data = await this.http.get<PieChartModel[]>(this.url + "cid_men_pie_data", { params });
    return data;
  }


  async getArrowListCidAsync(yearI, yearF, uf) {
    const params = new HttpParams()
      .set('uf', uf)
      .set('yearI', yearI)
      .set('yearF', yearF)

    console.log(uf)
    console.log(yearI)
    console.log(yearF)
    console.log(this.url + "arrow_list_cid")

    var data = await this.http.get<any[]>(this.url + "arrow_list_cid", { params });
    console.log(data)
    return data;
  }

  async getMVCData(cid, year, state) {
    const params = new HttpParams()
      .set('cid', cid)
      .set('uf', state)
      .set('year', year)

    console.log(this.url + "mcv_data");
    console.log(params)
    //var data["timeline"] = await this.http.get<any[]>(this.url + "timeline_data", { params });
    //data["heatmap"] = await this.http.get<any[]>(this.url + "heatmap_cid_idade", { params });
    var data = await this.http.get<any[]>(this.url + "mcv_data", { params });
    return data;
  }

  async getDashboardData(cid, state, year) {
    const params = new HttpParams()
      .set('cid', cid)
      .set('uf', state)
      .set('year', year)
    var data = await this.http.get<any[]>(this.url + "dashboard_data", { params });
    return data;

  }

  async getTimelineData(cid, year, state) {
    const params = new HttpParams()
      .set('cid', cid)
      .set('state', state)
      .set('year', year)

    console.log(this.url + "timeline_data");
    console.log(params)
    var data = await this.http.get<any[]>(this.url + "timeline_data", { params });
    return data;
  }

  async getDiagGenderData(year, uf, cid) {
    console.log("getDiagGenderData")
    const params = new HttpParams()
      .set('year', year)
      .set('uf', uf)
      .set('cid', cid)

    var data = await this.http.get<any[]>(this.url + "diag_gender_data", { params });
    return data
  }

  async getGenderAgePyramidData(year, uf, cid) {
    console.log("getGenderAgePyramidData")
    const params = new HttpParams()
      .set('year', year)
      .set('uf', uf)
      .set('cid', cid)

    var data = await this.http.get<any[]>(this.url + "gender_age_pyramid_data", { params });
    return data;
  }



  getListCid() {
    console.log("getListCid")

    var data = this.http.get<Cid[]>(this.url + "get_cid_list");
    return data;
  }
  /*  async getListCid() {
      console.log("getListCid")
  
      var data = await this.http.get<Cid[]>(this.url + "get_cid_list");
      return data;
    }
  */
  getListUf() {
    console.log("getUfList")
    var data = this.http.get<Uf[]>(this.url + "get_uf_list");
    return data;

  }


  async getCidLocalHeatmapData(year) {
    const params = new HttpParams()
      .set('year', year)

    console.log("getCidLocalHeatmapData");
    console.log(params)
    return this.http.get<PieChartModel[]>(this.url + "cid_local_heatmap_data", { params });
  }



  getCidWomenPieChartData() {
    console.log("getCidWomenPieChartData");
    return this.http.get<PieChartModel[]>(this.url + "cid_women_pie_data");

  }


  listarAtributos() {
    console.log("Listando atributos");
    return this.http.get<Atributo[]>(this.url + "sihdatalist");

  }

  dadosIdadeGenero() {
    console.log("Buscando dados idade genero");
    return this.http.get<GenderAgeChart[]>(this.url + "internacoes-genero-idade");

  }

  /* listCid()
   {
     console.log("List CID")
     return this.http.get<CidTotal[]>("http://127.0.0.1:5000/datasus/");
   }*/


  pieData() {
    console.log("Data PIE")
    return this.http.get<PieData[]>("http://127.0.0.1:5000/piedata/");
  }

  tableData() {
    console.log("Data PIE")
    return this.http.get<PieData[]>("http://127.0.0.1:5000/piedata/");
  }

  /* tableData()
   {
     console.log("Data TABLE")
     return this.http.get<PieData[]>("http://127.0.0.1:5000/tabledata/");
   }
 
     // Obtem todos os carros
     listCidObs(): Observable<CidTotal[]> {
       return this.http.get<CidTotal[]>(this.url)
         //.pipe(
        //   retry(2),
        //   catchError(this.handleError))
     }
   
 
 
   readWeather()
   {
     return this.http.get<Weather[]>("http://127.0.0.1:5000/weatherReport/");
   }
 */

}
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Observable, of } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';

// import { MessageService } from './message.service';
// import { CIDInterface } from './cid';


// @Injectable({ providedIn: 'root' })
// export class RestService {

//   private cidUrl = "http://127.0.0.1:5000/datasus"

//   httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   };

//   constructor(
//     private http: HttpClient,
//     private messageService: MessageService) { }

//     private log(message: string) {
//       this.messageService.add(`RestService: ${message}`);
//     }


//     private result;

//   getCid(): Observable<CIDInterface[]> {

//       this.log("oi")
//          this.result =  this.http.get<CIDInterface[]>(this.cidUrl).pipe(
//         catchError(this.handleError<CIDInterface[]>('getCid', []))
//       );
//       this.log(this.result)
//       this.log("tchau")

//       return this.result;

//   }


//   /**
//    * Handle Http operation that failed.
//    * Let the app continue.
//    * @param operation - name of the operation that failed
//    * @param result - optional value to return as the observable result
//    */
//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {

//       // TODO: send the error to remote logging infrastructure
//       console.error(error); // log to console instead

//       // TODO: better job of transforming error for user consumption
//       this.log(`${operation} failed: ${error.message}`);

//       // Let the app keep running by returning an empty result.
//       return of(result as T);
//     };
//   }


// }
