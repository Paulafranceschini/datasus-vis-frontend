import { CidBgColor } from "app/enum/cid_bg_color";

export class PieChartModel {
  //label: keyof typeof CidBgColor = ""
  SEXO!: any;
  count!: number;
 // descricao!: string
 // percent!: number;

}

//  constructor(public label: string, public value: number) {
 // }

  /*static  Deserialize(jsonArray:any) : PieChartModel{
    jsonArray.map((json:any) => {
      console.log(json)
      json = (JSON.parse(json))
      console.log(json)
      const pm = new PieChartModel(json.label, json.value);
      return pm;
    })
    return new PieChartModel("", 0);
  }

}*/