import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { PyramidChartModel } from '../models/pyramidChart'

@Component({
  selector: 'app-pyramid-chart',
  templateUrl: './pyramid-chart.component.html',
  styleUrls: ['./pyramid-chart.component.css']
})
export class PyramidChartComponent implements OnInit {
  private svg: any;
  private dataJson!: any;

  margin = { top: 10, right: 10, bottom: 40, left: 10 }
  width = 350 - this.margin.left - this.margin.right;
  height = 400 - this.margin.top - this.margin.bottom;
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
    this.data.sort((a: PyramidChartModel, b: PyramidChartModel) => a.ordem < b.ordem ? -1 : 1)
    this.createSvg();
    this.drawBars(this.data);

  }

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("viewBox", '0 0 ' + (this.width + this.margin.left + this.margin.right) + ' ' + (this.height + this.margin.top + this.margin.bottom))
      .append("g")
  }


  private drawBars(data: any[]): void {

    // X
    let xM = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.count)])
      .rangeRound([this.width / 2, this.margin.left])


    let xF = d3.scaleLinear()
      .domain(xM.domain())
      .rangeRound([this.width / 2, this.width - this.margin.right])

    // X Axis
    this.svg.append("g")
      .attr("transform", `translate(0,${this.height - this.margin.bottom})`)
      .call(d3.axisBottom(xM)
        .ticks(4)
      )

    this.svg.append("g")
      .attr("transform", `translate(0,${this.height - this.margin.bottom})`)
      .call(d3.axisBottom(xF).
        ticks(3))


    this.svg.append("g").selectAll(".domain").remove()
    this.svg.selectAll(".tick:first-of-type").remove()

    this.svg.append("text")
      .attr("transform",
        "translate(" + (this.width / 2) + " ," +
        (this.height + this.margin.top) + ")")
      .style("text-anchor", "middle")
      .style("font-size", "10px")
      .text("Total de Internações");


    // Y 
    let y = d3.scaleBand()
      .domain(data.map(d => d.grupo_idade))
      .range([this.height - 40, this.margin.top])
      .padding(0.1)

    this.svg.append("text")
      //.attr("transform", "rotate(-90)")
      .attr("y", 0)
      .attr("x", this.width / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style("font-size", "10px")
      .text("Faixa Etária");


    var rect = this.svg.selectAll("rect")
      .data(data)
      .enter()


    rect.append("rect")
      .attr("fill", (d: PyramidChartModel) => d.SEXO === "1" ? "#8ecefe" : "#f78b9e")
      .attr("x", (d: PyramidChartModel) => d.SEXO === "1" ? xM(d.count) : xF(0))
      .attr("y", (d: PyramidChartModel) => y(d.grupo_idade))
      .attr("height", y.bandwidth())
      .attr("width", (d: PyramidChartModel) => d.SEXO === "1" ? xM(0) - xM(d.count) : xF(d.count) - xF(0))

    /* rect.append("text")
       .style("fill", "black")
       .style("font-size", "9px")
       .attr("dy", ".35em")
       .attr("y", (d: PyramidChartModel) => y(d.grupo_idade) + y.bandwidth()/2)
       .attr("x", (d: PyramidChartModel) => d.SEXO === "1" ? 0 : xF(d.count) + 20)
       .text((d: PyramidChartModel) => (d.count));*/


    this.svg.append("g")
      .attr("transform", `translate(${xM(0)},0)`)
      .call(d3.axisRight(y).tickSizeOuter(0))
      .selectAll(".tick text").attr("fill", "black")

    this.svg.append("circle").attr("cx", 255).attr("cy", 5).attr("r", 4).style("fill", "#8ecefe")
    this.svg.append("circle").attr("cx", 255).attr("cy", 20).attr("r", 4).style("fill", "#f78b9e")
    this.svg.append("text").attr("x", 260).attr("y", 5).text("Masculino").style("font-size", "9px").attr("alignment-baseline", "middle")
    this.svg.append("text").attr("x", 260).attr("y", 20).text("Feminino").style("font-size", "9px").attr("alignment-baseline", "middle")


  }
}

