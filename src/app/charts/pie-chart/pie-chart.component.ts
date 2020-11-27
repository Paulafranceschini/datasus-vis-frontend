import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CidBgColor } from 'app/enum/cid_bg_color';
import { CidFontColor } from 'app/enum/cid_font_color';

import * as d3 from 'd3';
import { PieChartModel } from "../models/pie-chart-model"


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})

export class PieChartComponent implements AfterViewInit {

  @Input() data!: PieChartModel[];
  @Input() id: any = "";

  private svg!: any;
  private margin = 0;
  private width = 350;
  private height = 400;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors!: any;

  ngAfterViewInit(): void {
    this.createSvg();
    this.drawChart();
  }

  private createSvg(): void {

    this.svg = d3.select("figure")
      .append("svg")
      //.attr("width", this.width)
      //.attr("height", this.height)
      .attr("viewBox", ('0 0 ' + this.width + ' ' + this.height))
      .append("g")
      .attr(
        "transform",
        "translate(" + this.width / 2 + "," + this.height / 2 + ")"
      );
  }


  private drawChart(): void {
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: PieChartModel) => Number(d.count));

    // create a tooltip
    var Tooltip = d3.select("body")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")

    // Build the pie chart
    this.svg
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(this.radius)
      )
      //.attr('fill', (d?: any, i?: any) => ((d3.color(CidBgColor[this.data[i].label]))))
      .attr("fill", (d: any) => { return (d.data.SEXO == '1') ? "#8ecefe" : "#f78b9e" })

      .attr("stroke", "white")
      .style("stroke-width", "1px")
      ;

    // Add labels
    const labelLocation = d3.arc()
      .innerRadius(0)
      .outerRadius(this.radius);

    this.svg
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('text')
      .attr("dy", "0em")
      .text( (d: any) => { return (d.data.SEXO == '1') ?
                           "Masculino (" +  Math.round(d.data.percent*10000)/100 + "%)" : "Feminino (" +  Math.round(d.data.percent*10000)/100 + "%)"})
      .attr("transform", (d: d3.DefaultArcObject) => "translate(" + labelLocation.centroid(d) + ")")
      .style("text-anchor", "middle")
      .style("font-size", 15)
      .style("color", (d: { data: PieChartModel }) => "#000")
      .append('text')
      .attr("dy", "1em")
      .text((d: { data: any }) => d.data.percent + "%")
      .style("text-anchor", "middle")
      .style("font-size", 15)
      .style("color", "#000")
 
 
  }

}
