import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { Cid } from 'app/models/cid-model';
import { Uf } from 'app/models/uf-model';
import { CidLoadService } from 'app/services/cid-load.service';
import { UfLoadService } from 'app/services/uf-load.service';
import { FilterDataModel } from 'app/models/filter-data-model'
import { CidBgColor } from 'app/enum/cid_bg_color';
import { CidFontColor } from 'app/enum/cid_font_color';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})

export class AppFiltersComponent implements OnInit, AfterViewInit {
  @Output() filter = new EventEmitter<FilterDataModel>();


  @Input() showCidOneFilter = true;
  @Input() showCidMultiFilter = true;
  @Input() showUfFilter = true;
  @Input() showYearFilter = true;
  @Input() showYearRangeFilter = false;
  @Input() showCheckboxInput = true;


  allSelected = false;

  filterData: FilterDataModel;

  cidListRet: any;
  cidList: Cid[];
  ufList: Uf[];

  filterForm: FormGroup;
  yearList = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"]

  @ViewChild('select') select: MatSelect;




  constructor(private formBuilder: FormBuilder, private cidLoadService: CidLoadService, private ufLoadService: UfLoadService) {
    this.cidList = this.cidLoadService.cidList;
    this.ufList = this.ufLoadService.ufList;
    this.filterForm = this.formBuilder.group({
      cid: [this.cidLoadService.cidList[0]],
      cids: this.formBuilder.array([]),
      // codSelection: [],
      uf: [this.ufList.filter(f => f.sigla == "RS")[0]],
      year: ["2020"],
      yearI: ["2010"],
      yearF: ["2020"]
    });

    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.cidList.forEach(() => this.cids.push(new FormControl(false)));
  }


  ngOnInit(): void {
  }


  onCheckboxChange(e) {
    //const atributosSelecionados: FormArray = this.form.get('atributos') as FormArray;
    /*if (e.target.checked) {
      this.cids.push(new FormControl(e.target.value));
    } else {
      const index = this.cids.controls.findIndex(x => x.value === e.target.value);
      this.cids.removeAt(index);
    }*/
    this.onSubmit();
  }

  onItemChange(value) {
  }

  getStyle(col) {
    let styles = {
      'backgroundColor': CidBgColor[col.cod],
      'color': CidFontColor[col.cod],
      'border': "2px solid #ffffff",
      'font-size': "12px",
      'padding': "0.75em",
      'vertical-align': 'center',
      'text-align': 'center'

    }
    return styles
  }


  ngAfterViewInit(): void {
    this.onSubmit();

  }

  get yearI() {
    return this.filterForm.get('yearI');
  }

  get cidRadio() {
    return this.filterForm.get('cidRadio');
  }

  get yearF() {
    return this.filterForm.get('yearF');
  }

  get cid() {
    return this.filterForm.get('cid');
  }

  get cids() {
    return this.filterForm.controls.cids as FormArray;
  }

  get codSelection() {
    return this.filterForm.get('codSelection');
  }


  get uf() {
    return this.filterForm.get('uf');
  }


  get year() {
    return this.filterForm.get('year');
  }

  toggleAllSelection() {
    if (this.allSelected) {
      this.select.options.forEach((item: MatOption) => item.select());
    } else {
      this.select.options.forEach((item: MatOption) => item.deselect());
    }
  }
  optionClick() {
    let newStatus = true;
    this.select.options.forEach((item: MatOption) => {
      if (!item.selected) {
        newStatus = false;
      }
    });
    this.allSelected = newStatus;
  }


  onSubmit() {
    this.filterData = new FilterDataModel()
    console.log(this.cidRadio)
    this.filterData.cid = this.cid.value.cod

    // this.filterData.codSelection = values
    this.filterData.cidSelection = this.filterForm.value.cids
      .map((checked, i) => checked ? this.cidList[i] : null)
      .filter(v => v !== null);
    this.filterData.cid = this.filterData.cidSelection[0]
    this.filterData.codSelection = this.filterData.cidSelection.map(a => a.cod);

    console.log(this.filterData.cid)


    this.filterData.uf = this.uf.value.sigla
    this.filterData.year = this.year.value
    this.filterData.yearI = this.yearI.value
    this.filterData.yearF = this.yearF.value

    this.filter.emit(this.filterData);
  }



}
