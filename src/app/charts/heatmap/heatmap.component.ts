import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { HeatmapModel } from '../../models/heatmap-model'



@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})

export class HeatmapComponent implements OnInit {
  @Input() data!: HeatmapModel[];

  constructor() { }

  ngOnInit(): void {
    // set the dimensions and margins of the graph
    var margin = { top: 30, right: 30, bottom: 30, left: 150 },
      width = 1000 - margin.left - margin.right,
      height = 800 - margin.top - margin.bottom;


    // append the svg object to the body of the page
    var svg = d3.select("#heatmap")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    // Labels of row and columns
    var myStates = d3.map(this.data, (d: HeatmapModel) => { return d.SIGLA_UF; }).keys()
    var myVars = d3.map(this.data, (d: HeatmapModel) => { return d.COD }).keys().sort()


    // Build X scales and axis:
    var x = d3.scaleBand()
      .range([0, width])
      .domain(myStates)
      .padding(0.05);
    svg.append("g")
      .style("font-size", 15)
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickSize(0))
      .select(".domain").remove()

    // Build X scales and axis:
    var y = d3.scaleBand()
      .range([height, 0])
      .domain(myVars)
      .padding(0.05);
    svg.append("g")
      .style("font-size", 15)
      .call(d3.axisLeft(y).tickSize(0))
      .select(".domain").remove();

    // Build color scale
    /* var myColor = d3.scaleLinear()
       .range(["white", "#69b3a2"])
       .domain([1, 100])*/
    var myColor = d3.scaleSequential()
      .interpolator(d3.interpolateOrRd)
      .domain([d3.min(this.data, (d : HeatmapModel) => { return d.per; }), d3.max(this.data, (d : HeatmapModel) => { return d.per; })]);

    // create a tooltip
    var tooltip = d3.select("#heatmap")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")

    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function (d) {
      tooltip
        .style("opacity", 1)
      d3.select(this)
        .style("stroke", "black")
        .style("opacity", 1)
    }
    var mousemove = function (d) {
      tooltip
        .html("Percentual de internações: " + Math.round(d.per*10000)/100)
        .style("left", (d3.mouse(this)[0] + 70) + "px")
        .style("top", ((d3.mouse(this)[1] + 150)) + "px")
    }
    var mouseleave = function (d) {
      tooltip
        .style("opacity", 0)
      d3.select(this)
        .style("stroke", "none")
        .style("opacity", 0.8)
    }



    svg.selectAll()
      .data(this.data, (d: any) => {return d.SIGLA_UF + ':' + d.COD; })
      .enter()
      .append("rect")
      .attr("x", (d: any) => { return x(d.SIGLA_UF) })
      .attr("y", (d: any) => { return y(d.COD) })
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", x.bandwidth())
      .attr("height", y.bandwidth())
      .style("fill", function (d) { return myColor(d.per) })
      .style("stroke-width", 4)
      .style("stroke", "none")
      .style("opacity", 0.8)
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)


    // Add title to graph
    svg.append("text")
      .attr("x", 0)
      .attr("y", -50)
      .attr("text-anchor", "left")
      .style("font-size", "22px")
 
    // Add subtitle to graph
    svg.append("text")
      .attr("x", 0)
      .attr("y", -20)
      .attr("text-anchor", "left")
      .style("font-size", "14px")
      .style("fill", "grey")
      .style("max-width", 400)
  }

}