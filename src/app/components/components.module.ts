import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectUfComponent } from './select-uf/select-uf.component';
import { SelectCidComponent } from './select-cid/select-cid.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from 'app/demo-material-module';
import { AppFiltersComponent } from './filters/filters.component';
import { AppCidLegendComponent } from './cid-legend/cid-legend.component';



@NgModule({
  declarations: [SelectUfComponent, SelectCidComponent, MultiSelectComponent,
  AppFiltersComponent, AppCidLegendComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,  
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ], 
  exports: [
    SelectUfComponent,
    SelectCidComponent,
  AppFiltersComponent  ]
})
export class ComponentsModule { }
