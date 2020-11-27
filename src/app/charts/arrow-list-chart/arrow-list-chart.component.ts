import { Component, Input, OnInit } from '@angular/core';
import { CidBgColor } from 'app/enum/cid_bg_color';
import { CidFontColor } from 'app/enum/cid_font_color';
import * as d3 from 'd3';
import { ArrowChartModel } from '../../models/arrow-chart-model'


@Component({
  selector: 'app-arrow-list-chart',
  templateUrl: './arrow-list-chart.component.html',
  styleUrls: ['./arrow-list-chart.component.css']
})
export class ArrowListChartComponent implements OnInit {
  private svg: any;

  margin = { top: 10, right: 10, bottom: 40, left: 10 }
  width = 0;
  height = 0;

  @Input() data!: ArrowChartModel[];
  @Input() anoInicial = "";
  @Input() anoFinal = "";
  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars();


  }

  private createSvg(): void {
    this.width = 1000;
    this.height = 800;

    this.svg = d3.select("figure#arrowList")
      .append("svg")
      //.attr("width", this.width)
      //.attr("height", this.height)
      .attr("viewBox", '0 0 ' + this.width + ' ' + this.height)
      .append("g")
    //.attr("transform",
    //    "translate(" + this.margin.left + "," + this.margin.top + ")");


  }


  private drawBars(): void {
    var rectHeight = 25;
    var rectWidth = 400;
    var space = 550
    // X
    this.width = 1000

    let x = d3.scaleLinear()
      .domain([0, this.width])
      .rangeRound([0, this.width])


    /*this.svg.append("g")
      .attr("transform", `translate(0,${this.height - this.margin.bottom})`)
      .call(d3.axisBottom(x)
        .ticks(this.width / 80, "s")
      )


    this.svg.append("g").selectAll(".domain").remove()
    this.svg.selectAll(".tick:first-of-type").remove()
*/
    // Y 
    let y = d3.scaleLinear()
      .domain([0, 19])
      .range([0, this.height - 100])


    var mouseover = function (d, i) {
      var id = this.getAttribute("id")

      id = id.substring(0, id.length - 1);

      d3.select("#" + id + "l")
        .attr("stroke-width", 3.5)
        .style("opacity", 1)

    }

    var mouseout = function (d, i) {
      var id = this.getAttribute("id")

      id = id.substring(0, id.length - 1);

      d3.select("#" + id + "l")
        .attr("stroke-width", 1)
        .style("opacity", 1)

    }


    var nodes = this.svg.selectAll(".rect")
      .data(this.data)
      .enter()
      .append("g")
      .classed('rect', true)


    nodes.append("rect")
      .attr("width", rectWidth)
      .attr("height", rectHeight)
      .attr("x", 0)
      .attr("y", (d: ArrowChartModel) => y(d.pos1))
      .attr("fill", (d: ArrowChartModel) => CidBgColor[d.COD])
      .attr("id", (d: ArrowChartModel) => d.COD + "i")
      .on("mouseover", mouseover)
      .on("mouseout", mouseout)


    nodes.append("text")
      .attr("x", 5)
      .attr("y", (d: ArrowChartModel) => y(d.pos1) + rectHeight / 2)
      .attr("dy", ".35em")
      .style("font-size", "11px")
      .attr("fill", (d: ArrowChartModel) => CidFontColor[d.COD])
      .text((d: ArrowChartModel) => (d.descricao.length > 60 )?  d.descricao.substring(0,60) + "..." :  d.descricao)

      //.text((d: ArrowChartModel) => d.descricao.substring(0, 100) + "...");

    nodes.append("rect")
      .attr("width", rectWidth)
      .attr("height", rectHeight)
      .attr("x", space)
      .attr("y", (d: ArrowChartModel) => y(d.pos2))
      .attr("fill", (d: ArrowChartModel) => CidBgColor[d.COD])
      .attr("id", (d: ArrowChartModel) => d.COD + "f")

    nodes.append("text")
      .attr("x", space + 5)
      .attr("y", (d: ArrowChartModel) => y(d.pos2) + rectHeight / 2)
      .attr("dy", ".35em")
      .style("font-size", "11px")
      .attr("fill", (d: ArrowChartModel) => CidFontColor[d.COD])
      .text((d: ArrowChartModel) => (d.descricao.length > 60 )?  d.descricao.substring(0,60) + "..." :  d.descricao);

    nodes.append("line")
      .attr("x1", rectWidth)
      .attr("x2", space)
      .attr("y1", (d: any) => y(d.pos1) + rectHeight / 2)
      .attr("y2", (d: any) => y(d.pos2) + rectHeight / 2)
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1)
      .attr("id", (d: ArrowChartModel) => d.COD + "l")

    this.svg.append("text")
      .attr("x", space + rectWidth / 2 - 20)
      .attr("y", 15)
      .attr("dy", ".35em")
      .text(this.anoFinal);

    this.svg.append("text")
      .attr("x", rectWidth / 2 - 20)
      .attr("y", 15)
      .attr("dy", ".35em")
      .text(this.anoInicial);

  }
}
