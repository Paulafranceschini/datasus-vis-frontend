import { Component, Input, OnInit } from '@angular/core';
import { CidBgColor } from 'app/enum/cid_bg_color';
import { TimelineDataModel } from 'app/models/timeline-data-model';
import * as d3 from 'd3';
import * as d3Time from 'd3-time';

import * as d3Array from 'd3-array';
import { ARIA_DESCRIBER_PROVIDER_FACTORY } from '@angular/cdk/a11y';


@Component({
  selector: 'app-timeline-chart',
  templateUrl: './timeline-chart.component.html',
  styleUrls: ['./timeline-chart.component.css']
})

export class TimelineChartComponent implements OnInit {

  @Input() data: any;
  private idleTimeout;

  constructor() { }

  ngOnInit(): void {

    var data = this.data;
    // set the dimensions and margins of the graph
    var margin = { top: 50, right: 30, bottom: 100, left: 100 },
      width = 1300 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz")
      .append("svg")
      //.attr("width", width + margin.left + margin.right)
      //.attr("height", height + margin.top + margin.bottom)
      .attr("viewBox", '0 0 ' + (width + margin.left + margin.right) + ' ' + (height + margin.top + margin.bottom))

      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


    //Read the data

    // group the data: I want to draw one line per group
    var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
      .key((d: any) => { return d.COD; })
      .entries(data);

    // Add X axis --> it is a date format
    var x = d3.scaleTime()
      .domain(d3.extent(data, (d: TimelineDataModel) => { return d.data; }))
      .range([0, width]);

    var months = new Set(data.map((d: TimelineDataModel) => (new Date(d.data)).getMonth()))

    var xAxis = svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(months.size).tickFormat(d3.timeFormat("%b")));

    // text label for the x axis
    svg.append("text")
      .attr("transform",
        "translate(" + (width / 2) + " ," +
        (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("Data de Internação");

    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, d3.max(data, (d: TimelineDataModel) => { return +d.total; })])
      .range([height, 0]);
    var yAxis = svg.append("g")
      .call(d3.axisLeft(y));


    // text label for the y axis
    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Total de Internações");
    //var bisectDate = d3.bisector(function(d: any) { return d.values; }).left,


    // Draw the line
    var mouseover = function (d, i) {

      focus.style("display", null);

      d3.selectAll("path")
        .style("opacity", 0.4)

      d3.select(this)
        .attr("stroke-width", 3.5)
        .style("opacity", 1)

    }


    var mousemove = function (d, i) {
      var x0: any = x.invert(d3.mouse(this)[0])
      var bisectDate = d3.bisector(function (d: any) { return d.data; }).left;
      var i2 = bisectDate(sumstat[i].values, x0, 1);


      var d0 = sumstat[i].values[i2 - 1];

      var d1 = sumstat[i].values[i2];


      d = x0 - d0.data > d1.data - x0 ? d1 : d0;

      var data = new Date(parseInt(d.data));
      var formatTime = d3.timeFormat("%d/%m/%Y");
      var dataFormatada = formatTime(data);

      var descricao = ""
      if (d.descricao.length > 40) {
        descricao = d.descricao.substring(0, 40) + "..."
      } else {
        descricao = d.descricao
      }

      focus.attr("transform", "translate(" + x(d.data) + "," + y(d.total) + ")");
      focus.select(".tooltip-cid").text("CID: " + (d.COD) + " - " + descricao);
      focus.select(".tooltip-date").text("Data: " + dataFormatada);
      focus.select(".tooltip-total").text("Total: " + (d.total));
    }

    var mouseout = function (d) {

      d3.selectAll("path")
        .style("opacity", 1)

      d3.select(this)
        .attr("stroke-width", 1.5)
        .style("opacity", 1)
    }



    svg.selectAll(".line")
      .data(sumstat)
      .enter()
      .append("path")
      .attr("fill", "none")
      //.attr("stroke",  d  => { return color(d.key) })
      .attr("stroke", (d: any) => { console.log(d.key); return CidBgColor[d.key] })
      .attr("stroke-width", 2.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", function (d) {
        return d3.line()
          .x((d: any) => { return x(d.data); })
          .y((d: any) => { return y(+d.total); })
          (d.values)
      })
      .on("mouseover", mouseover)
      .on("mouseout", mouseout)
      .on("mousemove", mousemove)

    var focus = svg.append("g")
      .attr("class", "focus")
      .style("display", "none");

    focus.append("circle")
      .attr("r", 5);

    focus.append("rect")
      //.attr("class", "tooltip")
      .attr("width", 400)
      .attr("height", 80)
      .attr("x", 10)
      .attr("y", -22)
      .attr("rx", 4)
      .attr("ry", 4)
      .style("stroke", "#000")
      .style("fill", "white")
      .style("font-size", "11px");

    focus.append("text")
      .attr("class", "tooltip-cid")
      .attr("x", 18)
      .attr("y", -2)
      .style("font-size", "11px");


    focus.append("text")
      .attr("class", "tooltip-date")
      .attr("x", 18)
      .attr("y", 18)
      .style("font-size", "11px");


    focus.append("text")
      .attr("class", "tooltip-total")
      .attr("x", 18)
      .attr("y", 38)
      .style("font-size", "10px");


  }

}