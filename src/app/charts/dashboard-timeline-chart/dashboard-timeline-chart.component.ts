import { Component, Input, OnInit } from '@angular/core';
import { CidBgColor } from 'app/enum/cid_bg_color';
import { TimelineDataModel } from 'app/models/timeline-data-model';
import * as d3 from 'd3';

@Component({
  selector: 'app-dashboard-timeline-chart',
  templateUrl: './dashboard-timeline-chart.component.html',
  styleUrls: ['./dashboard-timeline-chart.component.css']
})

export class DashboardTimelineChartComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit(): void {

    var data = this.data;
    // set the dimensions and margins of the graph
    var margin = { top: 50, right: 0, bottom: 100, left: 100 },
      width = 500 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz")
      .append("svg")
      .attr("viewBox", '0 0 ' + (width + margin.left + margin.right) + ' ' + (height + margin.top + margin.bottom))
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


    // Add X axis --> it is a date format
    var x = d3.scaleTime()
      .domain(d3.extent(data, (d: TimelineDataModel) => { return d.data; }))
      .range([0, width]);

    var months = new Set(data.map((d: TimelineDataModel) => (new Date(d.data)).getMonth()))

    var xAxis = svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(months.size).tickFormat(d3.timeFormat("%b")));

    var bisect = d3.bisector(function(d:any) { return d.data; }).left;


    // text label for the x axis
    svg.append("text")
      .attr("transform",
        "translate(" + (width / 2) + " ," +
        (height + margin.top) + ")")
      .style("text-anchor", "middle")
      .style("font-size", "9px")
      .text("Data de Internação");

    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, d3.max(data, (d: TimelineDataModel) => { return +d.total; })])
      .range([height, 0]);
    var yAxis = svg.append("g")
      .call(d3.axisLeft(y).ticks(8));


    // text label for the y axis
    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left/2)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style("font-size", "9px")
      .text("Total de Novas Internações");
    //var bisectDate = d3.bisector(function(d: any) { return d.values; }).left,


    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d",
        d3.line()
          .x((d: any) => { return x(d.data); })
          .y((d: any) => { return y(+d.total); })
      )
  }

}