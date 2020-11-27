import { Component, Input, OnInit } from '@angular/core';
import { CidBgColor } from 'app/enum/cid_bg_color';
import { MultiBarChartModel } from 'app/models/multibar-chart-model';
import * as d3 from 'd3';
import { color } from 'd3';

@Component({
  selector: 'app-multi-bar-chart',
  templateUrl: './multi-bar-chart.component.html',
  styleUrls: ['./multi-bar-chart.component.css']
})
export class MultiBarChartComponent implements OnInit {

  @Input() data: MultiBarChartModel[];

  constructor() { }

  ngOnInit(): void {

    this.drawChart();
  }

  async drawChart() {
    var data = this.data;


    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 100, left: 50 },
      width = 1000 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;

    var svg = d3.select("#multi_bar_chart")
      .append("svg")
      //.attr("width", width + margin.left + margin.right)
      //.attr("height", height + margin.top + margin.bottom)
      .attr("viewBox", '0 0 ' + (width + margin.left + margin.right) + ' ' + (height + margin.top + margin.bottom))
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    var groupKey = "COD"
    var keys = [
      "masculino",
      "feminino",
    ]


    var x0 = d3.scaleBand()
      .domain(data.map(d => d[groupKey]))
      .rangeRound([0, width])
      .paddingInner(0.1)

    var x1 = d3.scaleBand()
      .domain(keys)
      .rangeRound([0, x0.bandwidth()])
      .paddingInner(0.1)
      .paddingOuter(0.5)

    var y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d3.max(keys, key => d[key]))]).nice()
      .rangeRound([height - margin.bottom, margin.top])


    svg.append("g")
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", d => `translate(${x0(d[groupKey])},0)`)
      .selectAll("rect")
      .data(d => keys.map(key => ({ key, value: d[key] })))
      .enter().append("rect")
      .attr("x", d => x1(d.key))
      .attr("y", d => y(d.value))
      .attr("width", x1.bandwidth())
      .attr("height", d => y(0) - y(d.value))
      .attr("fill", (d: any) => { return (d.key === 'masculino') ? "#8ecefe" : "#f78b9e" })


    /*   .data(data)
       .join("g")
       .attr("transform", d => `translate(${x0(d[groupKey])},0)`)
       .selectAll("rect")
       .data(d => keys.map(key => ({ key, value: d[key] })))
       .join("rect")
       .attr("x", d => x1(d.key))
       .attr("y", d => y(d.value))
       .attr("width", x1.bandwidth())
       .attr("height", d => y(0) - y(d.value))
       .attr("fill", d => color(d.key));*/

    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x0).tickPadding(10).tickFormat((d: any) => { return "[" + d + "]" }).tickSizeOuter(0))
      .selectAll("text")
      .attr("y", 0)
      .attr("x", 9)
      .attr("dy", ".60em")
      .attr("transform", "rotate(40)")
      .style("text-anchor", "start");

    //.call(g => g.select(".domain").remove())

    svg.append("g")
      //.call(d3.axisLeft(y))
      .call(d3.axisLeft(y).ticks(null, "s"))
      .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text("Total"))

    svg.append("text")
      .attr("transform",
        "translate(" + (width / 2) + " ," +
        (height - 20) + ")")
      .style("text-anchor", "middle")
      .style("font-size", "10px")
      .attr("font-weight", "bold")
      .text("CID");
  }

}
