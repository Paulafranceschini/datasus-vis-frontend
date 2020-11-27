import { Component, Input, OnInit } from '@angular/core';
import { CidBgColor } from 'app/enum/cid_bg_color';
import { HeatmapModel } from 'app/models/heatmap-model';
import { TimelineDataModel } from 'app/models/timeline-data-model';
import * as d3 from 'd3';
import { PyramidChartModel } from '../models/pyramidChart';
import { TimelineChartComponent } from '../timeline-chart/timeline-chart.component';


@Component({
  selector: 'app-multiple-coordinated-view',
  templateUrl: './multiple-coordinated-view.component.html',
  styleUrls: ['./multiple-coordinated-view.component.css']
})
export class MultipleCoordinatedViewComponent implements OnInit {

  @Input() timelineData: any;
  @Input() heatmapData: any;
  @Input() pyramidData: any;

  months;

  constructor() { }

  ngOnInit(): void {
    this.months = new Set(this.timelineData.map((d: TimelineDataModel) => (new Date(d.data)).getMonth()))
    this.drawPyramid(this.pyramidData)
    this.drawTimelineChart();
    this.drawHeatmapChart(this.heatmapData);
  }

  drawTimelineChart() {
    var timelineData = this.timelineData;

    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 30, left: 50 },
      width = 500 - margin.left - margin.right,
      height = 260 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#timeline")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleTime()
      .domain(d3.extent(timelineData, (d: TimelineDataModel) => { return d.data; }))
      .range([0, width]);


    var xAxis = svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(this.months.size).tickFormat(d3.timeFormat("%b")));

    // Add Y axis
    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, d3.max(timelineData, (d: TimelineDataModel) => { return +d.total; })])
      .range([height, 0]);
    var yAxis = svg.append("g")
      .call(d3.axisLeft(y));


    // Add the line
    svg.append("path")
      .datum(timelineData)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x((d: any) => { return x(d.data) })
        .y((d: any) => { return y(d.total) })
      )
  }

  drawHeatmapChart(data) {
    data.sort((a: any, b: any) => a.ordem < b.ordem ? -1 : 1)

    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 90, left: 50 },
      width = 500 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#heatmap")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");




    // Labels of row and columns
    var ages = d3.map(data, (d: HeatmapModel) => { return d.grupo_idade }).keys()

    // Build X scales and axis:
    /*var x = d3.scaleBand()
      .range([0, width])
      .domain(myStates)
      .padding(0.05);
    svg.append("g")
      .style("font-size", 15)
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickSize(0))
      .select(".domain").remove()
      */
    // Add X axis --> it is a date format
    // Add X axis --> it is a date format
    var x = d3.scaleTime()
      .domain(d3.extent(this.timelineData, (d: TimelineDataModel) => { return d.data; }))
      .range([0, width]);

    var xAxis = svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(this.months.size).tickFormat(d3.timeFormat("%b")));
    
    // Build X scales and axis:
    var y = d3.scaleBand()
      .range([height, 0])
      .domain(ages)
      .padding(0.05);
    svg.append("g")
      .call(d3.axisLeft(y).tickSize(0))

    // Build color scale
    /* var myColor = d3.scaleLinear()
       .range(["white", "#69b3a2"])
       .domain([1, 100])*/
    var myColor = d3.scaleSequential()
      .interpolator(d3.interpolateOrRd)
      .domain([d3.min(data, (d: HeatmapModel) => { return d.per; }), d3.max(data, (d: HeatmapModel) => { return d.per; })]);

    // create a tooltip
    /*    var tooltip = d3.select("#heatmap")
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
            .html("The exact total of<br>this cell is: " + d.per)
            .style("left", (d3.mouse(this)[0] + 70) + "px")
            .style("top", (d3.mouse(this)[1]) + "px")
        }
        var mouseleave = function (d) {
          tooltip
            .style("opacity", 0)
          d3.select(this)
            .style("stroke", "none")
            .style("opacity", 0.8)
        }*/



    svg.selectAll()
      .data(data, (d: any) => { return d.grupo_idade + ':' + d.data_; })
      .enter()
      .append("rect")
      .attr("x", (d: any) => { return x(d.data_) })
      .attr("y", (d: any) => { return y(d.grupo_idade) })
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", width / (this.months.size) - 0.2)
      .attr("height", y.bandwidth())
      .style("fill", function (d) { return myColor(d.per) })
      .style("stroke-width", 4)
      .style("stroke", "none")
      .style("opacity", 0.8)
    //.on("mouseover", mouseover)
    //.on("mousemove", mousemove)
    //.on("mouseleave", mouseleave)


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

  drawPyramid(data) {
    data.sort((a: any, b: any) => a.ordem < b.ordem ? -1 : 1)
    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 90, left: 0 },
      width = 350 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;


    // append the svg object to the body of the page
    var svg = d3.select("#pyramid")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    // X
    let xM = d3.scaleLinear()
      .domain([0, d3.max(data, (d: PyramidChartModel) => d.count)])
      .rangeRound([width / 2, margin.left])


    let xF = d3.scaleLinear()
      .domain(xM.domain())
      .rangeRound([width / 2, width - margin.right])

    // X Axis
    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xM)
        .ticks(3)
      )

    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xF).
        ticks(3))


    svg.append("g").selectAll(".domain").remove()
    svg.selectAll(".tick:first-of-type").remove()

    /*  svg.append("text")
        .attr("transform",
          "translate(" + (width / 2) + " ," +
          (height + margin.top) + ")")
        .style("text-anchor", "middle")
        .style("font-size", "10px")
        .text("Total de Internações");*/
    var ages = d3.map(data, (d: HeatmapModel) => { return d.grupo_idade }).keys()


    // Y 
    let y = d3.scaleBand()
      .domain(ages)
      .range([height, 0])
      .padding(0.05)
    svg.append("g")
      .call(d3.axisLeft(y).tickSize(0))


    /*    svg.append("text")
          //.attr("transform", "rotate(-90)")
          .attr("y", 0)
          .attr("x", width / 2)
          .attr("dy", "1em")
          .style("text-anchor", "middle")
          .style("font-size", "10px")
          .text("Faixa Etária");
    */

    var rect = svg.selectAll("rect")
      .data(data)
      .enter()


    rect.append("rect")
      .attr("fill", (d: any) => d.SEXO === "1" ? "#8ecefe" : "#f78b9e")
      .attr("x", (d: any) => d.SEXO === "1" ? xM(d.count) : xF(0))
      .attr("y", (d: any) => y(d.grupo_idade))
      .attr("height", y.bandwidth())
      .attr("width", (d: any) => d.SEXO === "1" ? xM(0) - xM(d.count) : xF(d.count) - xF(0))

    svg.append("g")
      .attr("transform", `translate(${xM(0)},0)`)
      .call(d3.axisRight(y).tickSizeOuter(0))
      .selectAll(".tick text").attr("fill", "black")
    
    svg.append("g").selectAll(".domain").remove()

  }

}