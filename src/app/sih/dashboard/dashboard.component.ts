import { Component, AfterViewInit } from '@angular/core';

import * as Chartist from 'chartist';
import { faCross, faFileMedical, faHospital, faAmbulance, faLevelUpAlt, faLevelDownAlt } from '@fortawesome/free-solid-svg-icons';

import { ChartType, ChartEvent } from 'ng-chartist';
import { FilterDataModel } from 'app/models/filter-data-model';
import { Observable } from 'rxjs-compat';
import { RestService } from 'app/services/rest.service';
import { AnyARecord } from 'dns';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Uf } from 'app/models/uf-model';
import { CidLoadService } from 'app/services/cid-load.service';
import { UfLoadService } from 'app/services/uf-load.service';
import { async } from 'rxjs';
export interface Chart {
	type: ChartType;
	data: Chartist.IChartistData;
	options?: any;
	responsiveOptions?: any;
	events?: ChartEvent;
}

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
	faAmbulance = faAmbulance;
	faHospital = faHospital;
	faFileMedical = faFileMedical;
	faCross = faCross;
	faLevelUp = faLevelUpAlt;
	faLevelDown = faLevelDownAlt;

	ufList: Uf[];
	yearList = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"]


	dataObs: Observable<any> | undefined;

	totalRegistros: any;
	mediaDia: any;
	totalAltas: any;
	totalMortes: any;
	cidMaisInter: any;
	cidMenosInter: any;
	totalMaisInter: any;
	totalMenosInter: any;
	corMaisInter: any;
	corMenosInter: any;
	dataPieChart: any;
	timelineDashboardData: any;
	subtitle: string;

	filterForm: FormGroup;


	constructor(private rs: RestService, private formBuilder: FormBuilder, private cidLoadService: CidLoadService, private ufLoadService: UfLoadService) {
		this.ufList = this.ufLoadService.ufList;
		this.filterForm = this.formBuilder.group({
			uf: [this.ufList.filter(f => f.sigla == "RS")[0]],
			year: ["2020"],

		});
	}

	ngAfterViewInit() {
		this.onSubmit();
	}



	onSubmit() {
		console.log(this.filterForm.get('year').value)
		console.log(this.filterForm.get('uf').value)
		this.getData(null, this.filterForm.get('year').value, this.filterForm.get('uf').value.sigla)

	}

	async getData(cidCods, year, uf) {
		this.dataObs = (await this.rs.getDashboardData(cidCods, uf, year))
		this.dataObs.subscribe((res: any) => {
			var jsonRes = JSON.parse(JSON.stringify(res))

			this.totalRegistros = JSON.parse(jsonRes["totalRegistros"])[0].count
			this.mediaDia = JSON.parse(jsonRes["mediaDia"])[0].round;
			this.totalAltas = JSON.parse(jsonRes["totalAltas"])[0].count;
			this.totalMortes = JSON.parse(jsonRes["totalMortes"])[0].count
			this.cidMaisInter = JSON.parse(jsonRes["maisInternacoes"])[0].descricao;
			this.totalMaisInter = JSON.parse(jsonRes["maisInternacoes"])[0].tot;
			this.cidMenosInter = JSON.parse(jsonRes["menosInternacoes"])[0].descricao;
			this.totalMenosInter = JSON.parse(jsonRes["menosInternacoes"])[0].tot;

			this.dataPieChart = JSON.parse(jsonRes["dataPieChart"]);
			this.timelineDashboardData = JSON.parse(jsonRes["timelineDashboardData"]);
			this.subtitle = uf + "/" + year

		});
	}
}