import { Injectable } from '@angular/core';
import { faChartBar, faDatabase, faList, faChartLine, faCubes, faVenusMars, faInfoCircle, faProjectDiagram, faTh, faMap, faChartPie } from '@fortawesome/free-solid-svg-icons';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: any;
}

export interface SubMenu{
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'about_sih', name: 'Sobre SIH', type: 'link', icon: faInfoCircle },
  { state: 'sihdatalist', name: 'SIH - Dados ', type: 'link', icon: faDatabase },
  { state: 'cid_list', name: 'Lista CID ', type: 'link', icon: faList },
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: faChartPie },
  { state: 'timeline_cid_chart', name: 'Linha do tempo ', type: 'link', icon: faChartLine },
  { state: 'gender_age_pyramid', name: 'Pirâmide Gênero-Idade ', type: 'link', icon: faCubes},
  { state: 'cid_bar_chart', name: 'Diagnóstico por Gênero ', type: 'link', icon: faVenusMars },
  { state: 'arrow_list_cid', name: 'Evolução CID ', type: 'link', icon: faProjectDiagram },
  { state: 'heatmap_cid_uf', name: 'Ocorrência por UF ', type: 'link', icon: faTh },
  { state: 'mcv_incidence', name: 'Vis. Combinadas ', type: 'link', icon: faChartBar },
  //{ state: 'mcv_prevalence', name: 'Prevalência Cid ', type: 'link', icon: faChartBar },
//  { state: 'sihdatalist', name: 'Internações x Cid ', type: 'link', icon: 'view_list' },
//  { state: 'sihdatalist', name: 'Mapa Cid ', type: 'link', icon: 'view_list' },
//  { state: 'sihdatalist', name: 'Efeito Covid ', type: 'link', icon: 'view_list' },
 // { state: 'sihdatalist', name: 'Exportar Dados JSON ', type: 'link', icon: 'view_list' },


 // { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5' },
 // { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy' },
 // { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list' },
 // { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
 // { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
 // { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
  /*{
    state: 'expansion',
    type: 'link',
    name: 'Expansion Panel',
    icon: 'vertical_align_center'
  },
  { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette' },
  { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
  {
    state: 'progress-snipper',
    type: 'link',
    name: 'Progress snipper',
    icon: 'border_horizontal'
  },
  {
    state: 'progress',
    type: 'link',
    name: 'Progress Bar',
    icon: 'blur_circular'
  },
  {
    state: 'dialog',
    type: 'link',
    name: 'Dialog',
    icon: 'assignment_turned_in'
  },
  { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
  { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
  { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
  {
    state: 'slide-toggle',
    type: 'link',
    name: 'Slide Toggle',
    icon: 'all_inclusive'
  }*/
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
