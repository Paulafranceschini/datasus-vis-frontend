import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as geojson from '../../../assets/geojs-100-mun.json';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {



  constructor() { }


  ngOnInit(): void {
    var data = require('../../../assets/geojs-100-mun.json');

    
    // The svg
    var svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height");
    
    // Map and projection
    var projection = d3.geoMercator()
      .scale(width/1.3)
      .translate([width / 2, height / 2])
    
    // Load external data and boot

    // Draw the map
    svg.append("g")
      .selectAll("path")
      .data(data.features)
      .enter().append("path")
      .attr("fill", "#69b3a2")
      .attr("d", d3.geoPath()
        .projection(projection)
      )
      .style("stroke", "#fff");

  }

}
